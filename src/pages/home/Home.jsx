import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/why_us">Why Us</Link>
    </div>
  );
};

export default Home;
