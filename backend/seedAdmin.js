const bcrypt = require("bcrypt");
const db = require("./db");

(async () => {
  let client;
  try {
    console.log("Seeding default admin...");
    client = await db.pool.connect();

    const check = await client.query("SELECT * FROM users WHERE role = 'admin'");
    if (check.rows.length > 0) {
      console.log("Admin already exists. Skipping.");
      return;
    }

    await client.query("BEGIN");

    const hashedPassword = await bcrypt.hash("admin", 10);
    const userRes = await client.query(
      "INSERT INTO users (username, email, password_hash, role, is_default_password) VALUES ($1, $2, $3, $4, false) RETURNING user_id",
      ["admin", "admin@swm.com", hashedPassword, "admin"]
    );
    const userId = userRes.rows[0].user_id;

    await client.query(
      "INSERT INTO user_profiles (user_id, first_name, last_name, phone_number, sex, job_title) VALUES ($1, 'System', 'Admin', '0000000000', 'other', 'Superuser')",
      [userId]
    );

    await client.query("COMMIT");
    console.log("Admin user created successfully!");
    console.log("Username: admin");
    console.log("Password: admin");
  } catch (err) {
    if (client) await client.query("ROLLBACK");
    console.error("Error seeding admin:", err);
    process.exit(1);
  } finally {
    if (client) client.release();
    await db.pool.end();
  }
})();
