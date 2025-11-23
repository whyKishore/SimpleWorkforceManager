const nodemailer = require("nodemailer");

let transporter;

const setupTransporter = async () => {
  if (transporter) return transporter;

  try {
    const testAccount = await nodemailer.createTestAccount();
    console.log("Ethereal test account created:");
    console.log(`User: ${testAccount.user}`);
    console.log(`Pass: ${testAccount.pass}`);

    transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    return transporter;
  } catch (err) {
    console.error("Error creating test email account:", err);
    throw err;
  }
};

const sendPasswordResetEmail = async (toEmail, token) => {
  if (!transporter) {
    await setupTransporter();
  }

  const resetUrl = `${process.env.FRONTEND_URL || "http://localhost:3000"}/reset-password/${token}`;

  const mailOptions = {
    from: '"Simple Workforce Manager" <no-reply@swm.com>',
    to: toEmail,
    subject: "Password Reset Request",
    html: `
      <p>You requested a password reset.</p>
      <p>Click this link to set a new password (expires in 15 minutes):</p>
      <a href="${resetUrl}">${resetUrl}</a>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.error("Error sending email:", err);
    throw err;
  }
};

setupTransporter();

module.exports = { sendPasswordResetEmail };
