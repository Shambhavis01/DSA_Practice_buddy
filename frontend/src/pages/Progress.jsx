function Progress() {
  return (
    <div className="progress-page">
      <h1>Your Progress 📊</h1>

      <p className="dashboard-subtitle">
        Track your DSA practice and see how you're improving.
      </p>

      <div className="progress-stats">
        <div className="progress-card">
          <h3>Problems Solved</h3>
          <p>12</p>
          <span>Keep going!</span>
        </div>

        <div className="progress-card">
          <h3>Current Streak</h3>
          <p>3 🔥</p>
          <span>Days</span>
        </div>

        <div className="progress-card">
          <h3>Total Attempts</h3>
          <p>18</p>
          <span>Across all problems</span>
        </div>
      </div>

      <div className="progress-section">
        <h2>Problem Difficulty</h2>

        <div className="difficulty-row">
          <div>
            <span>Easy</span>
            <strong>8 / 10</strong>
          </div>

          <div className="progress-bar">
            <div className="progress-fill easy-progress"></div>
          </div>
        </div>

        <div className="difficulty-row">
          <div>
            <span>Medium</span>
            <strong>4 / 10</strong>
          </div>

          <div className="progress-bar">
            <div className="progress-fill medium-progress"></div>
          </div>
        </div>

        <div className="difficulty-row">
          <div>
            <span>Hard</span>
            <strong>0 / 5</strong>
          </div>

          <div className="progress-bar">
            <div className="progress-fill hard-progress"></div>
          </div>
        </div>
      </div>

      <div className="progress-section">
        <h2>Recent Activity</h2>

        <div className="activity-item">
          <span>✅</span>
          <div>
            <strong>Two Sum</strong>
            <p>Solved • Easy • Array</p>
          </div>
          <small>Today</small>
        </div>

        <div className="activity-item">
          <span>✅</span>
          <div>
            <strong>Binary Search</strong>
            <p>Solved • Easy • Searching</p>
          </div>
          <small>Yesterday</small>
        </div>

        <div className="activity-item">
          <span>📝</span>
          <div>
            <strong>Maximum Subarray</strong>
            <p>Attempted • Medium • Array</p>
          </div>
          <small>2 days ago</small>
        </div>
      </div>
    </div>
  );
}

export default Progress;