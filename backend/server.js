const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "DSA Practice Buddy API is running 🚀"
  });
});
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend connection is working!"
  });
});
app.post("/api/mentor", (req, res) => {
  const { message } = req.body;

  res.json({
    reply: `I received your question: "${message}". AI integration will be connected next.`
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});