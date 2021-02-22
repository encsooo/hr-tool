import React from "react";
import Team from "../assets/team.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className="hero-container"
        style={{
          background: `linear-gradient(0deg, rgba(9,39,235,0.7) 0%, rgba(9,39,235,0.7) 100%), url(${Team})`,
          backgroundPosition: `top -120px right`
        }}
      >
        <Link to="/login">
          <button className="top-right-btn">
            Log in
          </button>
        </Link>
        <h1 className="hero-headline">Megacorp Employee Page</h1>
      </div>
      <div className="hero-bottom">
        <h3>Log in for more.</h3>
      </div>
    </>
  );
};

export default Home;
