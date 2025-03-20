import { Routes, Route } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Rainbow from "./components/Rainbow";

function App() {
  return (
    <div id="container">
      <Navbar />
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/rainbow" element={<Rainbow />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;