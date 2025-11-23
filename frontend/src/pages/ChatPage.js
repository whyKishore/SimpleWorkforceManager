// frontend/src/pages/ChatPage.js

import React, { useState, useEffect, useRef } from "react";
import api from "../api";
import socket from "../socket";
import { formatDateTime } from "../utils/formatDate";

function ChatPage({ currentUser }) {
  // --- State ---
  const [view, setView] = useState("contacts"); // 'contacts', 'search', 'blocked'
  const [conversations, setConversations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedUser, setSelectedUser] = useState(null);
  const [currentConvo, setCurrentConvo] = useState(null);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [chatError, setChatError] = useState("");
  const messagesEndRef = useRef(null);

  // --- Data Fetching ---
  const fetchConversations = async () => {
    try {
      // This route now fetches ALL convos (active and blocked)
      const res = await api.get("/chat/conversations");
      setConversations(res.data);
    } catch (err) {
      console.error("Failed to fetch contacts", err);
    }
  };

  // --- Initial Load ---
  useEffect(() => {
    fetchConversations();
  }, []);

  // --- Socket Listeners ---
  useEffect(() => {
    const handleReceiveMessage = (payload) => {
      const { message, conversation } = payload;

      // Only add if it's for the chat we have open
      if (conversation.conversation_id === currentConvo?.conversation_id) {
        setMessages((prevMessages) => [...prevMessages, message]);
      }

      // Refresh contacts if this is a new convo
      if (
        !conversations.find(
          (c) => c.conversation_id === conversation.conversation_id,
        )
      ) {
        fetchConversations();
      }
    };
    const handleChatError = (error) => {
      setChatError(error.message);
    };

    socket.on("receive_message", handleReceiveMessage);
    socket.on("chat_error", handleChatError);
    return () => {
      socket.off("receive_message", handleReceiveMessage);
      socket.off("chat_error", handleChatError);
    };
  }, [currentConvo, conversations]); // Added 'conversations'

  // --- Auto-scroll ---
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // --- Event Handlers ---
  const selectUserToChat = async (user) => {
    // 'user' can be a convo object or a search result object
    const userToSelect = {
      user_id: user.user_id,
      username: user.username,
      first_name: user.first_name,
    };
    setSelectedUser(userToSelect);
    setChatError("");

    try {
      // This API call now returns { conversation, messages }
      const res = await api.get(`/chat/history/${user.user_id}`);
      setCurrentConvo(res.data.conversation); // Set the convo object
      setMessages(res.data.messages); // Set the messages

      if (res.data.conversation?.status === "blocked") {
        setChatError("This conversation is blocked.");
      }
    } catch (err) {
      setMessages([]);
      setCurrentConvo(null);
      if (err.response?.status === 403) {
        setChatError("This conversation is blocked.");
      }
    }
  };

  // UPDATED: handleSendMessage now uses the callback
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedUser) return;
    setChatError("");

    socket.emit(
      "send_message",
      {
        receiver_id: selectedUser.user_id,
        content: newMessage,
      },
      (response) => {
        // This is the acknowledgment from the server
        if (response.status === "ok") {
          // Add the message to our own screen
          setMessages((prevMessages) => [...prevMessages, response.message]);
          // If this was the first message, set the convo object
          if (!currentConvo) {
            setCurrentConvo(response.conversation);
            fetchConversations(); // Update the contacts list
          }
        } else {
          // Show error (e.g., "This conversation is blocked")
          setChatError(response.message);
        }
      },
    );
    setNewMessage("");
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setView("contacts");
      setSearchResults([]);
      return;
    }
    try {
      const res = await api.get(`/chat/search?query=${searchQuery}`);
      setSearchResults(res.data);
      setView("search");
    } catch (err) {
      console.error(err);
    }
  };

  // --- Block/Unblock/Clear ---
  const handleBlock = async () => {
    let convoToBlock = currentConvo;
    if (!convoToBlock) {
      const convo = conversations.find(
        (c) => c.user_id === selectedUser.user_id,
      );
      if (!convo) {
        alert(
          "Cannot block a user you haven't spoken to. Send a message first.",
        );
        return;
      }
      convoToBlock = convo;
    }
    if (!convoToBlock) {
      alert("Error finding conversation to block. Send a message first.");
      return;
    }
    try {
      await api.put(`/chat/conversation/${convoToBlock.conversation_id}/block`);
      setChatError("Conversation blocked.");
      setCurrentConvo(null);
      setSelectedUser(null);
      fetchConversations();
      setView("contacts");
    } catch (err) {
      alert("Failed to block user.");
    }
  };

  const handleUnblock = async (convoId) => {
    try {
      await api.put(`/chat/conversation/${convoId}/unblock`);
      fetchConversations();
      setView("contacts");
    } catch (err) {
      alert("Failed to unblock user.");
    }
  };

  const handleClearChat = async () => {
    if (!currentConvo) return;
    if (window.confirm("Are you sure you want to clear this chat history?")) {
      try {
        await api.delete(
          `/chat/conversation/${currentConvo.conversation_id}/clear`,
        );
        setMessages([]);
      } catch (err) {
        alert("Failed to clear chat");
      }
    }
  };

  // --- Filtered Lists ---
  const myContacts = conversations.filter(
    (c) =>
      c.status === "active" ||
      (c.status === "blocked" && c.blocked_by !== currentUser.user_id),
  );
  const myBlockedList = conversations.filter(
    (c) => c.status === "blocked" && c.blocked_by === currentUser.user_id,
  );

  // --- RENDER ---
  const renderSidebar = () => (
    <div
      style={{ width: "30%", borderRight: "1px solid #ccc", overflowY: "auto" }}
    >
      <form onSubmit={handleSearch} style={{ padding: "10px" }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by username or email..."
        />
        <button type="submit">Search</button>
      </form>
      <button
        onClick={() => {
          setView("contacts");
          fetchConversations();
        }}
      >
        My Contacts
      </button>
      <button onClick={() => setView("blocked")}>
        Blocked ({myBlockedList.length})
      </button>

      {view === "contacts" && (
        <div>
          <h3>My Contacts</h3>
          {myContacts.map((convo) => (
            <div
              key={convo.conversation_id}
              onClick={() => selectUserToChat(convo)}
              style={{
                padding: "10px",
                cursor: "pointer",
                backgroundColor:
                  selectedUser?.user_id === convo.user_id ? "#eee" : "white",
              }}
            >
              {convo.first_name || ""} {convo.last_name || ""} ({convo.username}
              )
              {convo.status === "blocked" && (
                <span style={{ color: "red" }}> (Blocked by them)</span>
              )}
            </div>
          ))}
        </div>
      )}
      {view === "search" && (
        <div>
          <h3>Search Results</h3>
          {searchResults.map((user) => (
            <div
              key={user.user_id}
              onClick={() => selectUserToChat(user)}
              style={{ padding: "10px", cursor: "pointer" }}
            >
              {user.first_name} {user.last_name} ({user.username})
            </div>
          ))}
        </div>
      )}
      {view === "blocked" && (
        <div>
          <h3>Blocked</h3>
          {myBlockedList.map((req) => (
            <div key={req.conversation_id} style={{ padding: "10px" }}>
              {req.first_name || ""} {req.last_name || ""} ({req.username})
              <button onClick={() => handleUnblock(req.conversation_id)}>
                Unblock
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderChatWindow = () => (
    <div style={{ width: "70%", display: "flex", flexDirection: "column" }}>
      {!selectedUser ? (
        <div style={{ flex: 1, display: "grid", placeItems: "center" }}>
          <p>Select a contact or search for a user to start chatting.</p>
        </div>
      ) : (
        <>
          <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
            <h3>
              Chat with {selectedUser.first_name || selectedUser.username}
            </h3>
            {currentConvo && currentConvo.status === "active" && (
              <>
                <button onClick={handleClearChat}>Clear Chat</button>
                <button onClick={handleBlock} style={{ color: "red" }}>
                  Block User
                </button>
              </>
            )}
          </div>

          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {chatError && (
              <p style={{ color: "red", textAlign: "center" }}>{chatError}</p>
            )}
            {messages.map((msg) => (
              <div
                key={msg.message_id}
                style={{
                  alignSelf:
                    msg.sender_id === currentUser.user_id
                      ? "flex-end"
                      : "flex-start",
                  backgroundColor:
                    msg.sender_id === currentUser.user_id ? "#dcf8c6" : "#fff",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  margin: "5px",
                  maxWidth: "60%",
                }}
              >
                <p>{msg.content}</p>
                {/* --- THIS IS THE CORRECTED LINE (no extra </small>) --- */}
                <small>
                  {formatDateTime(msg.sent_at, currentUser.date_format)}
                </small>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} style={{ display: "flex" }}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder={
                chatError ? "You cannot send messages." : "Type a message..."
              }
              style={{ flex: 1 }}
              disabled={!!chatError}
            />
            <button type="submit" disabled={!!chatError}>
              Send
            </button>
          </form>
        </>
      )}
    </div>
  );

  return (
    <div style={{ display: "flex", height: "80vh", border: "1px solid #ccc" }}>
      {renderSidebar()}
      {renderChatWindow()}
    </div>
  );
}

export default ChatPage;
