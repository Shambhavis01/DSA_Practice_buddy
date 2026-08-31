const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "DSA Practice Buddy API is running 🚀"
  });
});

// Backend connection test
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend connection is working!"
  });
});

// AI Mentor
app.post("/api/mentor", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Message is required"
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",

      contents: `You are an expert DSA mentor helping a beginner computer science student.

Your job is to help the student understand Data Structures and Algorithms.

Follow these rules:
1. Explain concepts in simple, beginner-friendly language.
2. For coding problems, first provide hints and the approach instead of immediately giving the complete solution.
3. Explain the logic step by step when needed.
4. Mention time complexity and space complexity when relevant.
5. If the student shares code, identify the problem and explain how to fix it.
6. Use small examples to make difficult concepts easier.
7. Encourage the student to think and solve the problem themselves.
8. Do not unnecessarily make answers extremely long.

Student's question:
${message}`,
    });

    res.json({
      reply: response.text
    });

  } catch (error) {
    console.error("Gemini API Error:", error);

    res.status(500).json({
      error: "Unable to get a response from AI."
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});