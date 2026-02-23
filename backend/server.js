import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import dns from "node:dns/promises";
import { OAuth2Client } from "google-auth-library";

dotenv.config();
dns.setServers(['1.1.1.1', '8.8.8.8']);

const app = express();
const client = new OAuth2Client(process.env.CLIENT_ID);

app.use(cors({
  origin: [
    "https://ivarna.vercel.app",
    "http://localhost:5173"   // Vite default
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI not defined");
}

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// User schema (Google login users)
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: String
});

const User = mongoose.model("User", userSchema);

// Google auth route
app.post("/api/auth/google", async (req, res) => {
  try {
    const { token } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID
    });

    const payload = ticket.getPayload();

    const user = await User.findOneAndUpdate(
      { email: payload.email },
      { email: payload.email, name: payload.name },
      { upsert: true, new: true }
    );

    res.json({ user });
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
});

// Registration schema
const registrationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rollNumber: { type: String, required: true, unique: true },
    year: { type: String, required: true },
    section: { type: String, required: true },
    event: {
      type: [String],   // array of strings
      required: true
    },
    transactionId: { type: String, required: true },
    email: { type: String, required: true },        // form email
    loggedEmail: { type: String, required: true }    // google login email
  },
  { timestamps: true }
);

const Registration = mongoose.model("Registration", registrationSchema);

// Registration route
app.post("/api/register", async (req, res) => {
  try {
    const { name, rollNumber, year, section, event, transactionId, email, loggedemail } = req.body;

    if (
      !name ||
      !rollNumber ||
      !year ||
      !section ||
      !event ||
      !Array.isArray(event) ||
      event.length === 0 ||
      !transactionId ||
      !email ||
      !loggedemail
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields required"
      });
    }

    const existing = await Registration.findOne({ rollNumber: rollNumber.trim() });
    if (existing) {
      return res.status(400).json({ success: false, message: "Already registered" });
    }

    const newRegistration = await Registration.create({
      name,
      rollNumber: rollNumber.trim(),
      year,
      section,
      event,
      transactionId,
      email,
      loggedEmail: loggedemail
    });

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      data: newRegistration
    });

  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});