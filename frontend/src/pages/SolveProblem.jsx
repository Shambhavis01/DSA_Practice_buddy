import { useState } from "react";

function SolveProblem() {
  const [language, setLanguage] = useState("JavaScript");
  const [code, setCode] = useState(
`function twoSum(nums, target) {
  // Write your solution here

}`
  );

  const handleRun = () => {
    alert("Code execution will be connected in the next stage.");
  };

  const handleSubmit = () => {
    alert("Submission system will be connected in the next stage.");
  };

  return (
    <div className="solve-page">
      <div className="problem-header">
        <div>
          <h1>Two Sum</h1>

          <div className="problem-meta">
            <span>Array</span>
            <span className="difficulty easy">Easy</span>
          </div>
        </div>
      </div>

      <div className="solve-layout">
        {/* Problem Section */}

        <div className="problem-description">
          <h2>Problem Statement</h2>

          <p>
            Given an array of integers and a target value, return the
            indices of the two numbers that add up to the target.
          </p>

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

        {/* Code Section */}

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
            <button className="run-btn" onClick={handleRun}>
              ▶ Run Code
            </button>

            <button className="submit-btn" onClick={handleSubmit}>
              ✓ Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolveProblem;