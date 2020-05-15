import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="home">
      <h1>Lambda Eats!</h1>
      <Link to="/pizza">
        <button>Pizza?</button>
      </Link>
    </div>
  );
};
export default HomePage;
