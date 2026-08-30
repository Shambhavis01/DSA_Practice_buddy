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

      <button className="solve-btn">
        Solve →
      </button>
    </div>
  );
}

export default ProblemCard;