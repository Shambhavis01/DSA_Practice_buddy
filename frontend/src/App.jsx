import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Problems from "./pages/Problems";
import DailyChallenge from "./pages/DailyChallenge";
import Progress from "./pages/Progress";
import AIMentor from "./pages/AIMentor";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <main className="main-content">
          <Navbar />

          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/problems" element={<Problems />} />
              <Route
                path="/daily-challenge"
                element={<DailyChallenge />}
              />
              <Route path="/progress" element={<Progress />} />
              <Route path="/ai-mentor" element={<AIMentor />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;