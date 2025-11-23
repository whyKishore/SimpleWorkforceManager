import { io } from "socket.io-client";

const getSocketUrl = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  return apiUrl ? apiUrl.replace("/api", "") : "http://localhost:5001";
};

const socket = io(getSocketUrl(), { autoConnect: false });

export const connectSocket = (token) => {
  if (token) {
    socket.connect();
    socket.emit("authenticate", token);
  }
};

export const disconnectSocket = () => socket.disconnect();

export default socket;
