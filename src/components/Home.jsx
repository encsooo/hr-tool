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
          <button className="login-btn">
            Log in <span>>>></span>
          </button>
        </Link>
        <h1 className="hero-headline">Megacorp</h1>
      </div>
      <div className="hero-bottom">
        <h3>
          Our company: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quidem tenetur distinctio tempore labore molestiae facere rerum dolor
          repudiandae, aliquam corporis.
        </h3>
      </div>
    </>
  );
};

export default Home;
