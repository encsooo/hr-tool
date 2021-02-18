import React, { useState, useRef, useEffect } from "react";
import { Redirect } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"

import { authenticated }  from "../store/actions/authenticationAction"
import Laptop from '../assets/laptop.jpg';
import allData from "../data/userData";

const Login = (props) => {

  const authenticatedState = useSelector((state)=>state.authenticationReducer);
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [redirect, setRedirect] = useState("");
  // SEND THE ID THROUGH PROPS SO WE KNOW WHICH USER IS IT
  const [userID, setUserID] = useState(0)  

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setRedirect(checkLoginInfo());
  };

  
  const checkLoginInfo = () => {
    const permissionCheck = allData.reduce((acc,user)=>{
      if(formData.username===user.username && formData.password===user.password && user.admin){
        acc = "admin"
      } else if(formData.username===user.username && formData.password===user.password && !user.admin){
        acc = "employee"
        setUserID(user.id)
      }
      return acc
    },"")
   
    if(permissionCheck===""){
      return "wrong"
    }else{
      return permissionCheck
    }
  };

  if (redirect === "admin") {
    dispatch(authenticated())
    return <Redirect to={{ pathname: "/admin", username: formData.username }} />;
  } else if (redirect === "employee") {
    return <Redirect to={{ pathname: "/employee", id: userID}} />;
  }

  return (
    <main>
      <div className="header-container" style={{background: `linear-gradient(0deg, rgba(9,39,235,0.7) 0%, rgba(9,39,235,0.7) 100%), url(${Laptop})`}}>
          <button
              className="notfound-btn"
              onClick={() => props.history.push("/")}
            >
              >>> Go Home
            </button>
          <div className="header-title">
            <h2>Please log in</h2>
          </div>
      </div>
        <form className="login-inner-container">
          <div className="username-input">
            <label htmlFor="username">>>> Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="JaneDoe"
              onChange={changeHandler}
              ref={inputRef}
              />
          </div>
          <div className="password-input">
            <label htmlFor="password">>>> Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="01234"
              onChange={changeHandler}
            />
          </div>
          <button className="top-right-btn" onClick={submitHandler}>Login</button>
          {redirect==="wrong"&& <p className="warning">Wrong Name or Password</p>}
        </form>
      
    </main>
  );
};

export default Login;
