const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const crypto = require('crypto');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Update CORS to allow requests from your frontend domain on Vercel
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}));

// In-memory storage for tokens with expiration (in a real app, use a database)
const tokens = {};

// Nodemailer transporter setup
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API endpoint to send the verification email
app.post('/api/send-verification-email', async (req, res) => {
  const { email } = req.body;

  // Generate a unique token and store it with an expiration time
  const token = crypto.randomBytes(32).toString('hex');
  const expirationTime = Date.now() + 10 * 60 * 1000; // 10 minutes from now
  tokens[token] = { email, expirationTime };

  // Construct the verification link using the frontend URL from the environment variable
  const verificationLink = `${process.env.FRONTEND_URL}/verify?token=${token}`;

  const mailOptions = {
    from: '"Mira\'s Home Service" <no-reply@mira.com>',
    to: email,
    subject: 'Verify your email',
    text: `Click here to verify your email: ${verificationLink}\n\nPlease complete the verification process before signing in.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: 'Failed to send email' });
    }
    res.status(200).json({ message: 'Verification email sent' });
  });
});

// API endpoint to verify the email
app.get('/api/verify-email', (req, res) => {
  const { token } = req.query;

  // Find the email associated with the token
  const data = tokens[token];

  if (data) {
    const { email, expirationTime } = data;

    // Check if the token has expired
    if (Date.now() > expirationTime) {
      delete tokens[token];
      return res.status(400).json({ message: 'Verification failed or link expired' });
    }

    // Verification successful
    delete tokens[token];
    return res.status(200).json({ message: 'Email verified successfully' });
  }

  // Verification failed
  return res.status(400).json({ message: 'Invalid or expired verification link' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
