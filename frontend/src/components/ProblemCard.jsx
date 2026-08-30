import { Link } from "react-router-dom";

function ProblemCard({ title, topic, difficulty, description }) {
  return (
    <div className="problem-card">
      <div className="problem-info">
        <h3>{title}</h3>

        <div className="problem-meta">
          <span>{topic}</span>

          <span className={`difficulty ${difficulty.toLowerCase()}`}>
            {difficulty}
          </span>
        </div>

        <p>{description}</p>
      </div>

      <Link to="/solve" className="solve-btn">
        Solve →
      </Link>
    </div>
  );
}

export default ProblemCard;