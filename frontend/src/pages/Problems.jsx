import { useState } from "react";
import ProblemCard from "../components/ProblemCard";

function Problems() {
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("All Topics");
  const [difficulty, setDifficulty] = useState("All Difficulty");

  const problems = [
    {
      title: "Two Sum",
      topic: "Array",
      difficulty: "Easy",
      description: "Find two numbers in an array that add up to a target.",
    },
    {
      title: "Valid Parentheses",
      topic: "Stack",
      difficulty: "Easy",
      description: "Determine whether a string of brackets is valid.",
    },
    {
      title: "Binary Search",
      topic: "Searching",
      difficulty: "Easy",
      description: "Find the position of a target value in a sorted array.",
    },
    {
      title: "Reverse Linked List",
      topic: "Linked List",
      difficulty: "Easy",
      description: "Reverse a singly linked list.",
    },
    {
      title: "Maximum Subarray",
      topic: "Array",
      difficulty: "Medium",
      description: "Find the contiguous subarray with the largest sum.",
    },
    {
      title: "Longest Substring Without Repeating Characters",
      topic: "String",
      difficulty: "Medium",
      description: "Find the longest substring containing unique characters.",
    },
  ];

  const filteredProblems = problems.filter((problem) => {
    const matchesSearch = problem.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesTopic =
      topic === "All Topics" || problem.topic === topic;

    const matchesDifficulty =
      difficulty === "All Difficulty" ||
      problem.difficulty === difficulty;

    return matchesSearch && matchesTopic && matchesDifficulty;
  });

  return (
    <div className="problems-page">
      <h1>DSA Problems 📚</h1>

      <p className="dashboard-subtitle">
        Practice coding problems and improve your problem-solving skills.
      </p>

      <div className="problem-filters">
        <input
          type="text"
          placeholder="Search problems..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          <option>All Topics</option>
          <option>Array</option>
          <option>String</option>
          <option>Stack</option>
          <option>Linked List</option>
          <option>Searching</option>
        </select>

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>All Difficulty</option>
          <option>Easy</option>
          <option>Medium</option>
        </select>
      </div>

      <div className="problems-list">
        {filteredProblems.length > 0 ? (
          filteredProblems.map((problem) => (
            <ProblemCard
              key={problem.title}
              title={problem.title}
              topic={problem.topic}
              difficulty={problem.difficulty}
              description={problem.description}
            />
          ))
        ) : (
          <div className="no-results">
            <h3>No problems found 😕</h3>
            <p>Try changing your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Problems;