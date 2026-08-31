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
    message: "DSA Practice Buddy API is running 🚀",
  });
});

// Backend connection test
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend connection is working!",
  });
});

// Simple fallback responses
const getFallbackResponse = (message) => {
  const question = message.toLowerCase();

  if (question.includes("stack")) {
    return `A Stack is a linear data structure that follows the LIFO principle — Last In, First Out.

Think of a stack of plates. The last plate you put on top is the first one you remove.

Main operations:
• Push – add an element
• Pop – remove the top element
• Peek – view the top element

Example:
Stack: [10, 20, 30]
Pop → 30

Most stack operations take O(1) time.`;
  }

  if (question.includes("queue")) {
    return `A Queue is a linear data structure that follows FIFO — First In, First Out.

Think of people standing in a line. The person who comes first gets served first.

Main operations:
• Enqueue – add an element
• Dequeue – remove the front element
• Front – view the first element

Most basic queue operations take O(1) time.`;
  }

  if (question.includes("binary search")) {
    return `Binary Search is used to find an element in a sorted array.

The basic idea is:
1. Check the middle element.
2. If it is the target, we are done.
3. If the target is smaller, search the left half.
4. If the target is larger, search the right half.

Because the search space is divided in half each time, its time complexity is O(log n).`;
  }

  if (question.includes("two sum")) {
    return `For Two Sum, the goal is to find two numbers whose sum equals the target.

A common approach is to use a Hash Map:
1. Go through the array.
2. For each number, calculate target - number.
3. Check whether that value is already in the map.
4. If yes, we found the answer.

Time complexity: O(n)
Space complexity: O(n)`;
  }

  return `Here's a simple way to think about it:

Start by identifying the data structure or algorithm involved, then break the problem into smaller steps.

For a coding problem, first understand the input and expected output, then think about the approach before writing code.

Try solving it yourself first. If you share the specific problem or your code, I can guide you step by step.`;
};

// AI Mentor
app.post("/api/mentor", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",

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
      reply: response.text,
    });
  } catch (error) {
    console.error("Gemini API Error:", error);

    // Fallback response if Gemini is temporarily unavailable
    res.json({
      reply: getFallbackResponse(req.body.message || ""),
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});