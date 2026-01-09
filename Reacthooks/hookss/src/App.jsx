import { Routes, Route, Link } from "react-router-dom";
import './index.css';

// pages
import Home from "../pages/Home";
import About from "../pages/About";

// context
import { HookUseContext } from "../src/components/HookUseContext";

function App() {
  return (
    <HookUseContext>
      <div>
        <h1>React Hooks</h1>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </HookUseContext>
  );
}

export default App;
