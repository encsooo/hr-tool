import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import people from "../assets/people.jpg";
import AllUsers from './AllUsers';

const Admin = (props) => {
  const isAuthenticated = useSelector((state) => state);

  if (!isAuthenticated) return <Redirect to="/notFound404" />;

 return (
  <>
    <AllUsers/>
  </>
 )
 }
export default Admin
