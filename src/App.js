import "./App.css";
import Portfolio from "./Portfolio";
import Contents from "./contents";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="Main-container">
      <Routes>
        <Route path="/" element={<Contents />} />
        <Route path="/portfolio202307" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
