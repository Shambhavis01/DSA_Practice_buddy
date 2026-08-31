import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function SolveProblem() {
  const [searchParams] = useSearchParams();

  const problemId = searchParams.get("problem") || "two-sum";

  const problems = {
    "two-sum": {
      title: "Two Sum",
      topic: "Array",
      difficulty: "Easy",
      functionCode: `function twoSum(nums, target) {
  // Write your solution here

}`,
      statement:
        "Given an array of integers and a target value, return the indices of the two numbers that add up to the target.",
      input: "nums = [2, 7, 11, 15], target = 9",
      output: "[0, 1]",
      explanation: "nums[0] + nums[1] = 9",
      constraints: [
        "2 ≤ nums.length ≤ 10⁴",
        "-10⁹ ≤ nums[i] ≤ 10⁹",
        "-10⁹ ≤ target ≤ 10⁹",
      ],
    },

    "valid-parentheses": {
      title: "Valid Parentheses",
      topic: "Stack",
      difficulty: "Easy",
      functionCode: `function isValid(s) {
  // Write your solution here

}`,
      statement:
        "Given a string containing brackets, determine whether the brackets are correctly matched and properly nested.",
      input: 's = "({[]})"',
      output: "true",
      explanation: "Every opening bracket has a matching closing bracket.",
      constraints: [
        "1 ≤ s.length ≤ 10⁴",
        "The string contains only brackets.",
      ],
    },

    "binary-search": {
      title: "Binary Search",
      topic: "Searching",
      difficulty: "Easy",
      functionCode: `function search(nums, target) {
  // Write your solution here

}`,
      statement:
        "Given a sorted array and a target value, find the position of the target using binary search.",
      input: "nums = [-1, 0, 3, 5, 9, 12], target = 9",
      output: "4",
      explanation: "The target value 9 is present at index 4.",
      constraints: [
        "1 ≤ nums.length ≤ 10⁴",
        "The array is sorted in ascending order.",
      ],
    },

    "reverse-linked-list": {
      title: "Reverse Linked List",
      topic: "Linked List",
      difficulty: "Easy",
      functionCode: `function reverseList(head) {
  // Write your solution here

}`,
      statement:
        "Given the head of a singly linked list, reverse the list and return the new head.",
      input: "head = [1, 2, 3, 4, 5]",
      output: "[5, 4, 3, 2, 1]",
      explanation:
        "The links between the nodes are reversed so that the last node becomes the first.",
      constraints: [
        "The number of nodes is between 1 and 5000.",
        "-5000 ≤ Node.val ≤ 5000",
      ],
    },

    "maximum-subarray": {
      title: "Maximum Subarray",
      topic: "Array",
      difficulty: "Medium",
      functionCode: `function maxSubArray(nums) {
  // Write your solution here

}`,
      statement:
        "Given an integer array, find the contiguous subarray with the largest sum and return that maximum sum.",
      input: "nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]",
      output: "6",
      explanation:
        "The subarray [4, -1, 2, 1] has the largest sum, which is 6.",
      constraints: [
        "1 ≤ nums.length ≤ 10⁵",
        "-10⁴ ≤ nums[i] ≤ 10⁴",
      ],
    },

    "longest-substring-without-repeating-characters": {
      title: "Longest Substring Without Repeating Characters",
      topic: "String",
      difficulty: "Medium",
      functionCode: `function lengthOfLongestSubstring(s) {
  // Write your solution here

}`,
      statement:
        "Given a string, find the length of the longest substring that does not contain repeating characters.",
      input: 's = "abcabcbb"',
      output: "3",
      explanation:
        'The longest substring without repeating characters is "abc", which has length 3.',
      constraints: [
        "0 ≤ s.length ≤ 5 × 10⁴",
        "The string may contain letters, digits, symbols and spaces.",
      ],
    },
  };

  const problem = problems[problemId] || problems["two-sum"];

  const [language, setLanguage] = useState("JavaScript");
  const [code, setCode] = useState(problem.functionCode);

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

    const alreadySolved = activity.some(
      (item) => item.title === problem.title && item.solved
    );

    if (alreadySolved) {
      alert("You have already solved this problem! ✅");
      return;
    }

    progress.solved += 1;
    progress.attempts += 1;

    if (problem.difficulty === "Easy") {
      progress.easy += 1;
    } else if (problem.difficulty === "Medium") {
      progress.medium += 1;
    } else {
      progress.hard += 1;
    }

    localStorage.setItem("dsaProgress", JSON.stringify(progress));

    activity.unshift({
      title: problem.title,
      difficulty: problem.difficulty,
      topic: problem.topic,
      solved: true,
      date: "Today",
    });

    localStorage.setItem("dsaActivity", JSON.stringify(activity));

    alert(
      problemId === "maximum-subarray"
        ? "Daily Challenge completed! 🎉"
        : "Problem marked as solved! 🎉"
    );
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

          <p>{problem.statement}</p>

          <h3>Example</h3>

          <div className="example-box">
            <p>
              <strong>Input:</strong> {problem.input}
            </p>

            <p>
              <strong>Output:</strong> {problem.output}
            </p>

            <p>
              <strong>Explanation:</strong> {problem.explanation}
            </p>
          </div>

          <h3>Constraints</h3>

          <ul>
            {problem.constraints.map((constraint, index) => (
              <li key={index}>{constraint}</li>
            ))}
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
            <button className="run-btn" onClick={handleRun}>
              ▶ Run Code
            </button>

            <button className="submit-btn" onClick={handleSubmit}>
              ✓ Mark as Solved
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolveProblem;