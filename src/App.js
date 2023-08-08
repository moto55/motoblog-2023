import "./App.css";
import Portfolio from "./Portfolio";
import Contents from "./Contents";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";

function App() {
  return (
    <div className="Main-container">
      <Routes>
        <Route path="/" element={<Contents />} />
        <Route path="/portfolio202307" element={<Portfolio />} />
        <Route path="/profile202307" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
