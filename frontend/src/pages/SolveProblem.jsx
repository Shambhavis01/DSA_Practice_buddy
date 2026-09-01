import { useState } from "react";
import { useLocation } from "react-router-dom";

function SolveProblem() {
  const location = useLocation();

  // Problem information
  const problem = location.state?.problem || {
    title: "Two Sum",
    topic: "Array",
    difficulty: "Easy",
    description:
      "Given an array of integers and a target value, return the indices of the two numbers that add up to the target.",
  };

  const [language, setLanguage] = useState("JavaScript");

  const [code, setCode] = useState(
`function twoSum(nums, target) {
  // Write your solution here

}`
  );

  const handleRun = () => {
    alert("Code execution is not available in this version.");
  };

  const handleSubmit = () => {
    const savedProgress = localStorage.getItem("dsaProgress");

    let progress = {
      solved: 0,
      attempts: 0,
      streak: 0,
      easy: 0,
      medium: 0,
      hard: 0,
    };

    if (savedProgress) {
      try {
        progress = JSON.parse(savedProgress);
      } catch {
        // Use default progress
      }
    }

    const savedActivity = localStorage.getItem("dsaActivity");

    let activity = [];

    if (savedActivity) {
      try {
        activity = JSON.parse(savedActivity);
      } catch {
        activity = [];
      }
    }

    // Check whether this particular problem is already solved
    const alreadySolved = activity.some(
      (item) =>
        item.title === problem.title &&
        item.solved === true
    );

    if (alreadySolved) {
      alert("You have already solved this problem! ✅");
      return;
    }

    // Update overall progress
    progress.solved += 1;
    progress.attempts += 1;

    if (problem.difficulty === "Easy") {
      progress.easy += 1;
    } else if (problem.difficulty === "Medium") {
      progress.medium += 1;
    } else if (problem.difficulty === "Hard") {
      progress.hard += 1;
    }

    localStorage.setItem(
      "dsaProgress",
      JSON.stringify(progress)
    );

    // Add activity
    activity.unshift({
      title: problem.title,
      difficulty: problem.difficulty,
      topic: problem.topic,
      solved: true,
      date: new Date().toISOString(),
    });

    localStorage.setItem(
      "dsaActivity",
      JSON.stringify(activity)
    );

    alert("Problem marked as solved! 🎉");
  };

  return (
    <div className="solve-page">
      <div className="problem-header">
        <div>
          <h1>{problem.title}</h1>

          <div className="problem-meta">
            <span>{problem.topic}</span>

            <span
              className={`difficulty ${problem.difficulty.toLowerCase()}`}
            >
              {problem.difficulty}
            </span>
          </div>
        </div>
      </div>

      <div className="solve-layout">

        <div className="problem-description">
          <h2>Problem Statement</h2>

          <p>{problem.description}</p>

          <h3>Example</h3>

          <div className="example-box">
            <p>
              <strong>Input:</strong> nums = [2, 7, 11, 15], target = 9
            </p>

            <p>
              <strong>Output:</strong> [0, 1]
            </p>

            <p>
              <strong>Explanation:</strong> nums[0] + nums[1] = 9
            </p>
          </div>

          <h3>Constraints</h3>

          <ul>
            <li>2 ≤ nums.length ≤ 10⁴</li>
            <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
            <li>-10⁹ ≤ target ≤ 10⁹</li>
          </ul>
        </div>

        <div className="code-section">
          <div className="code-header">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>JavaScript</option>
              <option>Python</option>
              <option>Java</option>
              <option>C++</option>
            </select>
          </div>

          <textarea
            className="code-editor"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck="false"
          />

          <div className="code-actions">
            <button
              className="run-btn"
              onClick={handleRun}
            >
              ▶ Run Code
            </button>

            <button
              className="submit-btn"
              onClick={handleSubmit}
            >
              ✓ Mark as Solved
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SolveProblem;