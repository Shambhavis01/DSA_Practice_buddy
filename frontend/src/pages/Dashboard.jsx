function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome back! 👋</h1>

      <p className="dashboard-subtitle">
        Keep practicing and improve your DSA skills.
      </p>

      <div className="stats-container">
        <div className="stat-card">
          <h3>Problems Solved</h3>
          <p>0</p>
        </div>

        <div className="stat-card">
          <h3>Current Streak</h3>
          <p>0 days</p>
        </div>

        <div className="stat-card">
          <h3>Accuracy</h3>
          <p>0%</p>
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