import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Twilio credentials from .env
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE; // your Twilio number

const client = twilio(accountSid, authToken);

app.post("/api/send-sos", async (req, res) => {
  try {
    const { name, location, contacts } = req.body;

    // Example message
    const messageBody = `🚨 SOS Alert! ${name} may be in danger.
Location: ${location || "Unknown"}
Please contact immediately!`;

    // Send message to all emergency contacts
    const results = await Promise.all(
      contacts.map((contact) =>
        client.messages.create({
          body: messageBody,
          from: twilioPhone,
          to: contact,
        })
      )
    );

    res.json({ success: true, results });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(5000, () => console.log(" Server running on port 5000"));
