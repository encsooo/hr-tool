import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom"
import people from "../assets/people.jpg"
import AllUsers from './AllUsers'

const Admin = (props) => {
  const isAuthenticated = useSelector((state) => state);

  if (!isAuthenticated) return <Redirect to="/notFound404" />;

 return (
  <>
    <header style={{background: `linear-gradient(0deg, rgba(9,39,235,0.7) 0%, rgba(9,39,235,0.7) 100%), url(${people})`}}>
      <button className="notfound-btn" onClick={() => props.history.push("/")}>
        >>> Log out
      </button>
      <Link to="/employeeRegister"><button className="employee-register-btn">Employee Register</button></Link> 
      <h1 className="user-list-title">Employee List</h1>
        
    </header> 
    <AllUsers/>
  </>
 )
 }
export default Admin
