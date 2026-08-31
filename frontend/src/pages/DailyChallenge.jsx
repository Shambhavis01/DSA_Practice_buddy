import { Link } from "react-router-dom";

function DailyChallenge() {
  return (
    <div className="daily-page">
      <div className="daily-header">
        <div>
          <h1>Daily Challenge 🎯</h1>
          <p className="dashboard-subtitle">
            Solve one problem every day and build your consistency.
          </p>
        </div>

        <div className="streak-box">
          🔥 <strong>0</strong> day streak
        </div>
      </div>

      <div className="daily-card">
        <div className="challenge-info">
          <span className="challenge-label">TODAY'S CHALLENGE</span>

          <h2>Maximum Subarray</h2>

          <div className="problem-meta">
            <span>Array</span>
            <span className="difficulty medium">Medium</span>
          </div>

          <p>
            Find the contiguous subarray with the largest sum and
            return its maximum sum.
          </p>

          <Link to="/solve?problem=maximum-subarray" className="solve-btn">
            Start Challenge →
          </Link>
        </div>

        <div className="challenge-icon">
          🎯
        </div>
      </div>

      <div className="daily-tips">
        <h2>💡 Today's Tip</h2>
        <p>
          Don't immediately look for the solution. Try to understand
          the problem, create an approach, and then start coding.
        </p>
      </div>
    </div>
  );
}

export default DailyChallenge;