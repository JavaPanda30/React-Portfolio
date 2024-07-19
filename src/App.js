import "./App.css";
import About from "./Component/Pages/About";
import Home from "./Component/Pages/Home";
import Navbar from "./Component/Pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Component/Pages/Projects";
// import Experience from "./Component/Pages/Experience";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/experience" element={<Experience/>}/> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
