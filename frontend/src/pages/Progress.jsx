import { useState } from "react";

function Progress() {
  const [progress, setProgress] = useState(() => {
    const savedProgress = localStorage.getItem("dsaProgress");

    if (savedProgress) {
      try {
        return JSON.parse(savedProgress);
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
    }

    return {
      solved: 0,
      attempts: 0,
      streak: 0,
      easy: 0,
      medium: 0,
      hard: 0,
    };
  });

  const [activity, setActivity] = useState(() => {
    const savedActivity = localStorage.getItem("dsaActivity");

    if (savedActivity) {
      try {
        return JSON.parse(savedActivity);
      } catch {
        return [];
      }
    }

    return [];
  });

  const resetProgress = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset your progress?"
    );

    if (!confirmReset) return;

    const emptyProgress = {
      solved: 0,
      attempts: 0,
      streak: 0,
      easy: 0,
      medium: 0,
      hard: 0,
    };

    localStorage.setItem(
      "dsaProgress",
      JSON.stringify(emptyProgress)
    );

    localStorage.setItem("dsaActivity", JSON.stringify([]));

    setProgress(emptyProgress);
    setActivity([]);
  };

  const getActivityDate = (date) => {
    if (!date) return "";

    if (date === "Today" || date === "Yesterday") {
      return date;
    }

    const activityDate = new Date(date);
    const today = new Date();

    const activityDay = new Date(
      activityDate.getFullYear(),
      activityDate.getMonth(),
      activityDate.getDate()
    );

    const todayDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    const difference =
      (todayDay - activityDay) / (1000 * 60 * 60 * 24);

    if (difference === 0) return "Today";
    if (difference === 1) return "Yesterday";
    if (difference === 2) return "2 days ago";

    return activityDate.toLocaleDateString();
  };

  return (
    <div className="progress-page">
      <div className="daily-header">
        <div>
          <h1>Your Progress 📊</h1>

          <p className="dashboard-subtitle">
            Track your DSA practice and see how you're improving.
          </p>
        </div>

        <button
          className="clear-chat-btn"
          onClick={resetProgress}
        >
          Reset Progress
        </button>
      </div>

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
            <strong>{progress.easy} / 10</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill easy-progress"
              style={{
                width: `${Math.min((progress.easy / 10) * 100, 100)}%`,
              }}
            ></div>
          </div>
        </div>

        <div className="difficulty-row">
          <div>
            <span>Medium</span>
            <strong>{progress.medium} / 10</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill medium-progress"
              style={{
                width: `${Math.min(
                  (progress.medium / 10) * 100,
                  100
                )}%`,
              }}
            ></div>
          </div>
        </div>

        <div className="difficulty-row">
          <div>
            <span>Hard</span>
            <strong>{progress.hard} / 5</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill hard-progress"
              style={{
                width: `${Math.min(
                  (progress.hard / 5) * 100,
                  100
                )}%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="progress-section">
        <h2>Recent Activity</h2>

        {activity.length > 0 ? (
          activity.slice(0, 5).map((item, index) => (
            <div className="activity-item" key={index}>
              <span>{item.solved ? "✅" : "📝"}</span>

              <div>
                <strong>{item.title}</strong>

                <p>
                  {item.solved ? "Solved" : "Attempted"} •{" "}
                  {item.difficulty} • {item.topic}
                </p>
              </div>

              <small>{getActivityDate(item.date)}</small>
            </div>
          ))
        ) : (
          <div className="no-results">
            <h3>No activity yet</h3>
            <p>Solve a problem to see your activity here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Progress;