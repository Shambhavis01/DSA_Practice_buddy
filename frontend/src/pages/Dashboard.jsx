import { useState } from "react";

function Dashboard() {
  const [progress] = useState(() => {
    const savedProgress = localStorage.getItem("dsaProgress");

    if (savedProgress) {
      try {
        return JSON.parse(savedProgress);
      } catch {
        return {
          solved: 0,
          attempts: 0,
          streak: 0,
        };
      }
    }

    return {
      solved: 0,
      attempts: 0,
      streak: 0,
    };
  });

  const solved = progress.solved || 0;
  const attempts = progress.attempts || 0;
  const streak = progress.streak || 0;

  const accuracy =
    attempts > 0 ? Math.round((solved / attempts) * 100) : 0;

  return (
    <div className="dashboard">
      <h1>Welcome back! 👋</h1>

      <p className="dashboard-subtitle">
        Keep practicing and improve your DSA skills.
      </p>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Problems Solved</h3>
          <p>{solved}</p>
        </div>

        <div className="stat-card">
          <h3>Current Streak</h3>
          <p>{streak} days</p>
        </div>

        <div className="stat-card">
          <h3>Accuracy</h3>
          <p>{accuracy}%</p>
        </div>
      </div>

      <div className="welcome-card">
        <h2>Start your DSA journey 🚀</h2>

        <p>
          Practice coding problems, get AI-powered hints, and understand
          your solutions better.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;