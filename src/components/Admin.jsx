import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import People from "../assets/people.jpg";
import AllUsers from './AllUsers'

const Admin = () => {
  const isAuthenticated = useSelector((state) => state);
  console.log("admin=>", isAuthenticated);

  if (!isAuthenticated) return <Redirect to="/notFound404" />;

 return (
     <AllUsers/>
 )
 }
export default Admin
