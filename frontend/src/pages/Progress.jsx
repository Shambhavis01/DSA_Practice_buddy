import { useState } from "react";

function Progress() {
  const [progress] = useState(() => {
    const saved = localStorage.getItem("dsaProgress");

    if (!saved) {
      return {
        solved: 0,
        attempts: 0,
        streak: 0,
        easy: 0,
        medium: 0,
        hard: 0,
      };
    }

    try {
      return JSON.parse(saved);
    } catch {
      return {
        solved: 0,
        attempts: 0,
        streak: 0,
        easy: 0,
        medium: 0,
        hard: 0,
      };
    }
  });

  const [activity] = useState(() => {
    const saved = localStorage.getItem("dsaActivity");

    if (!saved) {
      return [];
    }

    try {
      return JSON.parse(saved);
    } catch {
      return [];
    }
  });

  return (
    <div className="progress-page">
      <h1>Your Progress 📊</h1>

      <p className="dashboard-subtitle">
        Track your DSA practice and see how you're improving.
      </p>

      <div className="progress-stats">
        <div className="progress-card">
          <h3>Problems Solved</h3>
          <p>{progress.solved}</p>
          <span>Keep going!</span>
        </div>

        <div className="progress-card">
          <h3>Current Streak</h3>
          <p>{progress.streak} 🔥</p>
          <span>Days</span>
        </div>

        <div className="progress-card">
          <h3>Total Attempts</h3>
          <p>{progress.attempts}</p>
          <span>Across all problems</span>
        </div>
      </div>

      <div className="progress-section">
        <h2>Problem Difficulty</h2>

        <div className="difficulty-row">
          <div>
            <span>Easy</span>
            <strong>{progress.easy}</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill easy-progress"
              style={{
                width: `${Math.min(progress.easy * 10, 100)}%`,
              }}
            ></div>
          </div>
        </div>

        <div className="difficulty-row">
          <div>
            <span>Medium</span>
            <strong>{progress.medium}</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill medium-progress"
              style={{
                width: `${Math.min(progress.medium * 10, 100)}%`,
              }}
            ></div>
          </div>
        </div>

        <div className="difficulty-row">
          <div>
            <span>Hard</span>
            <strong>{progress.hard}</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill hard-progress"
              style={{
                width: `${Math.min(progress.hard * 20, 100)}%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="progress-section">
        <h2>Recent Activity</h2>

        {activity.length === 0 ? (
          <p>No activity yet. Start solving problems! 🚀</p>
        ) : (
          activity.map((item, index) => (
            <div className="activity-item" key={index}>
              <span>{item.solved ? "✅" : "📝"}</span>

              <div>
                <strong>{item.title}</strong>

                <p>
                  {item.solved ? "Solved" : "Attempted"} •{" "}
                  {item.difficulty} • {item.topic}
                </p>
              </div>

              <small>{item.date}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Progress;