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
        }}
      >
        <Link to="/login">
          <button className="top-right-btn">
            Log in <span>>>></span>
          </button>
        </Link>
        <h1 className="hero-headline">Megacorp Empolyee Page</h1>
      </div>
      <div className="hero-bottom">
        <h3>Log in for more.</h3>
      </div>
    </>
  );
};

export default Home;
