import React from "react";
import metro from "../assets/metro.jpg";

export default function NotFound404(props) {
  return (
    <>
      <div
        className="header-container"
        style={{
          background: `linear-gradient(0deg, rgba(9,39,235,0.7) 0%, rgba(9,39,235,0.7) 100%), url(${metro})`,
        }}
      >
        <h2 className="header-title">Nothing to see here....</h2>
      </div>
      <div className="notfound-main">
        <button
          className="top-right-btn"
          onClick={() => props.history.push("/")}
        >
          Go Home
        </button>
      </div>
    </>
  );
}
