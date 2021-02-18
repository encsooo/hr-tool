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
      <header style={{background: `linear-gradient(0deg, rgba(9,39,235,0.7) 0%, rgba(9,39,235,0.7) 100%), url(${people})`}}>
        <button className="notfound-btn" onClick={() => props.history.push("/")}>
          >>> Log out
        </button>
        <button className="employee-register-btn" onClick={handleEmployeeRegisterButton}>Employee Register</button>
        <h1 className="user-list-title">Employee List</h1>
          
      </header> 
      <AllUsers/>
    </>
  )
  }
 }
export default Admin
