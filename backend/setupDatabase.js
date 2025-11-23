const db = require("./db");

const types = [
  "CREATE TYPE user_role AS ENUM ('admin', 'manager', 'staff');",
  "CREATE TYPE task_status AS ENUM ('pending', 'in_progress', 'completed');",
  "CREATE TYPE complaint_status AS ENUM ('open', 'resolved');",
  "CREATE TYPE sex_type AS ENUM ('male', 'female', 'other');",
  "CREATE TYPE conversation_status AS ENUM ('active', 'blocked');",
];

const tables = [
  `CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role user_role NOT NULL,
    is_default_password BOOLEAN DEFAULT true NOT NULL,
    password_reset_token TEXT,
    password_reset_expires TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`,

  `CREATE TABLE IF NOT EXISTS user_profiles (
    profile_id SERIAL PRIMARY KEY,
    user_id INT UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) UNIQUE NOT NULL,
    sex sex_type NOT NULL,
    job_title VARCHAR(100),
    hire_date DATE,
    address TEXT,
    date_format VARCHAR(20) DEFAULT 'MM/DD/YYYY',
    notification_prefs JSONB DEFAULT '{}',
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE
  );`,

  `CREATE TABLE IF NOT EXISTS system_settings (
    setting_key VARCHAR(50) PRIMARY KEY,
    setting_value TEXT
  );`,

  `CREATE TABLE IF NOT EXISTS tasks (
    task_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status task_status DEFAULT 'pending' NOT NULL,
    assigned_to INT,
    assigned_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    due_date TIMESTAMP,
    CONSTRAINT fk_assigned_to FOREIGN KEY(assigned_to) REFERENCES users(user_id) ON DELETE SET NULL,
    CONSTRAINT fk_assigned_by FOREIGN KEY(assigned_by) REFERENCES users(user_id) ON DELETE SET NULL
  );`,

  `CREATE TABLE IF NOT EXISTS attendance (
    attendance_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    clock_in_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    clock_out_time TIMESTAMP,
    attendance_date DATE DEFAULT CURRENT_DATE NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE
  );`,

  `CREATE TABLE IF NOT EXISTS reports (
    report_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE
  );`,

  `CREATE TABLE IF NOT EXISTS complaints (
    complaint_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    status complaint_status DEFAULT 'open' NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE
  );`,

  `CREATE TABLE IF NOT EXISTS complaint_replies (
    reply_id SERIAL PRIMARY KEY,
    complaint_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    replied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT fk_complaint FOREIGN KEY(complaint_id) REFERENCES complaints(complaint_id) ON DELETE CASCADE,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE
  );`,

  `CREATE TABLE IF NOT EXISTS feedback (
    feedback_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    reply TEXT,
    replied_by INT,
    replied_at TIMESTAMP,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    CONSTRAINT fk_replied_by FOREIGN KEY(replied_by) REFERENCES users(user_id) ON DELETE SET NULL
  );`,

  `CREATE TABLE IF NOT EXISTS allowances (
    allowance_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    amount DECIMAL(10, 2) NOT NULL,
    frequency VARCHAR(50) DEFAULT 'one-time' NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE
  );`,

  `CREATE TABLE IF NOT EXISTS conversations (
    conversation_id SERIAL PRIMARY KEY,
    user1_id INT NOT NULL,
    user2_id INT NOT NULL,
    status conversation_status NOT NULL DEFAULT 'active',
    blocked_by INT,
    user1_cleared_at TIMESTAMP,
    user2_cleared_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user1_id, user2_id), 
    CONSTRAINT fk_user1 FOREIGN KEY(user1_id) REFERENCES users(user_id) ON DELETE CASCADE,
    CONSTRAINT fk_user2 FOREIGN KEY(user2_id) REFERENCES users(user_id) ON DELETE CASCADE,
    CONSTRAINT fk_blocked_by FOREIGN KEY(blocked_by) REFERENCES users(user_id) ON DELETE SET NULL
  );`,

  `CREATE TABLE IF NOT EXISTS messages (
    message_id SERIAL PRIMARY KEY,
    conversation_id INT NOT NULL,
    sender_id INT NOT NULL,
    content TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT fk_conversation FOREIGN KEY(conversation_id) REFERENCES conversations(conversation_id) ON DELETE CASCADE,
    CONSTRAINT fk_sender FOREIGN KEY(sender_id) REFERENCES users(user_id) ON DELETE CASCADE
  );`,
];

(async () => {
  let client;
  try {
    console.log("Starting database setup...");
    client = await db.pool.connect();

    for (const query of types) {
      await client.query(query).catch((err) => {
        if (err.code !== "42710") throw err;
      });
    }
    console.log("All types created or already exist");

    for (const query of tables) {
      await client.query(query).catch((err) => {
        if (err.code !== "42P07") throw err;
      });
    }
    console.log("All tables created or already exist");

    await client.query(
      `INSERT INTO system_settings (setting_key, setting_value)
       VALUES ('company_name', 'Simple Workforce Manager'), ('currency_symbol', '$')
       ON CONFLICT (setting_key) DO NOTHING;`
    );
    console.log("Default system settings inserted");
    console.log("Database setup successful");
  } catch (err) {
    console.error("Error setting up database:", err);
    process.exit(1);
  } finally {
    if (client) client.release();
    await db.pool.end();
  }
})();
