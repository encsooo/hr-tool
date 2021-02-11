import React from "react";
import metro from "../assets/metro.jpg";

export default function NotFound404(props) {
  return (
    <>
      <div
        className="notfound-header"
        style={{
          background: `linear-gradient(0deg, rgba(9,39,235,0.7) 0%, rgba(9,39,235,0.7) 100%), url(${metro})`,
        }}
      >
        <h2 className="notfound-title">Nothing to see here....</h2>
      </div>
      <div className="notfound-main">
        <button className="notfound-btn" onClick={() => props.history.goBack()}>
          >>> Go Back
        </button>
        <button
          className="notfound-btn"
          onClick={() => props.history.push("/")}
        >
          >>> Go Home
        </button>
      </div>
    </>
  );
}
