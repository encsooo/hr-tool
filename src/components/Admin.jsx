import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom"
import people from "../assets/people.jpg"
import AllUsers from './AllUsers'
import { adminLogin }  from "../store/actions/authenticationAction"

const Admin = (props) => {

  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state);
  const [redirect, setRedirect] = useState(false);
  
  function handleEmployeeRegisterButton(){
    dispatch(adminLogin())
    setRedirect(true);
  }

  if(redirect){
    return <Redirect to="/employeeRegister" />;
  }

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
