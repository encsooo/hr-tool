import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import AllUsers from './AllUsers'

const Admin = () => {

  const isAuthenticated = useSelector((state) => state);
  
  if (!isAuthenticated.authReducer){ return <Redirect to="/notFound404" />}
  else if(isAuthenticated.authReducer==="admin"){
    return (
    <>
      <AllUsers/>
    </>
  )
  }

 }
export default Admin
