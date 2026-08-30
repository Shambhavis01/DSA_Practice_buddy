import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span>DSA</span> Practice Buddy
      </div>

      <nav className="sidebar-nav">
        <Link to="/">🏠 Dashboard</Link>
        <Link to="/problems">📚 Problems</Link>
        <Link to="/daily-challenge">🎯 Daily Challenge</Link>
        <Link to="/progress">📊 Progress</Link>
        <Link to="/ai-mentor">🤖 AI Mentor</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;