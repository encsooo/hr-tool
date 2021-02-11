import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import People from "../assets/people.jpg";
import AllUsers from './AllUsers'

const Admin = () => {
  const isAuthenticated = useSelector((state) => state);
  console.log("admin=>", isAuthenticated);

  if (!isAuthenticated) return <Redirect to="/notFound404" />;

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://spreadsheets.google.com/feeds/cells/1lzHqm7_1FDtEQLvTOA8N98OMol001ZC1v4H6ec4QFBI/od6/public/basic?alt=json"
      );
      const data = await res.json();
      console.log(data);
    } catch {
      console.log("error");
    }
  };
  fetchData();

  return (
    <div className="form-container">
      <div
        className="admin-hero"
        style={{
          background: `linear-gradient(0deg, rgba(9,39,235,0.7) 0%, rgba(9,39,235,0.7) 100%), url(${People})`,
        }}
      ></div>
      <AllUsers />
    </div>
  );
};

export default Admin;
