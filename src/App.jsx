import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home/Home";
import WhyUs from "./pages/why_us/WhyUs";

function App() {
  return (
    <>
      <center>
        <h1>Britepixl</h1>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why_us" element={<WhyUs />} />
          </Routes>
        </Router>
      </center>
    </>
  );
}

export default App;
