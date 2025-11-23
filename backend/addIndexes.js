// Migration script to add performance indexes to existing database
// Run this on existing deployments: node addIndexes.js

const db = require("./db");

const indexes = [
  // Task indexes for performance
  "CREATE INDEX IF NOT EXISTS idx_tasks_assigned_to ON tasks(assigned_to);",
  "CREATE INDEX IF NOT EXISTS idx_tasks_assigned_by ON tasks(assigned_by);",
  "CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);",
  "CREATE INDEX IF NOT EXISTS idx_tasks_due_date ON tasks(due_date);",
  "CREATE INDEX IF NOT EXISTS idx_tasks_created_at ON tasks(created_at);",
  
  // Attendance indexes for performance
  "CREATE INDEX IF NOT EXISTS idx_attendance_user_id ON attendance(user_id);",
  "CREATE INDEX IF NOT EXISTS idx_attendance_date ON attendance(attendance_date);",
  "CREATE INDEX IF NOT EXISTS idx_attendance_user_date ON attendance(user_id, attendance_date);",
  "CREATE INDEX IF NOT EXISTS idx_attendance_clock_out ON attendance(clock_out_time);",
  
  // Message indexes for performance
  "CREATE INDEX IF NOT EXISTS idx_messages_conversation_id ON messages(conversation_id);",
  "CREATE INDEX IF NOT EXISTS idx_messages_sent_at ON messages(sent_at);",
  "CREATE INDEX IF NOT EXISTS idx_messages_conversation_time ON messages(conversation_id, sent_at);",
  "CREATE INDEX IF NOT EXISTS idx_messages_sender_id ON messages(sender_id);",
  
  // Complaint and feedback indexes
  "CREATE INDEX IF NOT EXISTS idx_complaints_user_id ON complaints(user_id);",
  "CREATE INDEX IF NOT EXISTS idx_complaints_status ON complaints(status);",
  "CREATE INDEX IF NOT EXISTS idx_complaints_submitted_at ON complaints(submitted_at);",
  "CREATE INDEX IF NOT EXISTS idx_complaint_replies_complaint_id ON complaint_replies(complaint_id);",
  "CREATE INDEX IF NOT EXISTS idx_complaint_replies_user_id ON complaint_replies(user_id);",
  
  "CREATE INDEX IF NOT EXISTS idx_feedback_user_id ON feedback(user_id);",
  "CREATE INDEX IF NOT EXISTS idx_feedback_replied_by ON feedback(replied_by);",
  "CREATE INDEX IF NOT EXISTS idx_feedback_submitted_at ON feedback(submitted_at);",
  
  // Report and allowance indexes
  "CREATE INDEX IF NOT EXISTS idx_reports_user_id ON reports(user_id);",
  "CREATE INDEX IF NOT EXISTS idx_reports_submitted_at ON reports(submitted_at);",
  "CREATE INDEX IF NOT EXISTS idx_allowances_user_id ON allowances(user_id);",
  "CREATE INDEX IF NOT EXISTS idx_allowances_created_at ON allowances(created_at);",
  
  // Conversation indexes
  "CREATE INDEX IF NOT EXISTS idx_conversations_user1_id ON conversations(user1_id);",
  "CREATE INDEX IF NOT EXISTS idx_conversations_user2_id ON conversations(user2_id);",
  "CREATE INDEX IF NOT EXISTS idx_conversations_status ON conversations(status);",
];

(async () => {
  let client;
  try {
    console.log("Starting index creation...");
    console.log(`Creating ${indexes.length} indexes...`);
    
    client = await db.pool.connect();
    
    let created = 0;
    let skipped = 0;
    
    for (const query of indexes) {
      try {
        await client.query(query);
        created++;
        const indexName = query.match(/idx_\w+/)[0];
        console.log(`✓ Created: ${indexName}`);
      } catch (err) {
        if (err.code === '42P07') {
          // Index already exists
          skipped++;
          const indexName = query.match(/idx_\w+/)[0];
          console.log(`- Skipped: ${indexName} (already exists)`);
        } else {
          console.error(`✗ Error creating index: ${err.message}`);
        }
      }
    }
    
    console.log("\n=== Index Creation Summary ===");
    console.log(`Total indexes: ${indexes.length}`);
    console.log(`Created: ${created}`);
    console.log(`Skipped: ${skipped}`);
    console.log("Index creation completed successfully!");
    
  } catch (err) {
    console.error("Error creating indexes:", err);
    process.exit(1);
  } finally {
    if (client) client.release();
    await db.pool.end();
  }
})();
