import React, { useState, useRef, useEffect } from "react";
import { Redirect } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"

import { authenticated }  from "../actions/authenticationAction"
import Laptop from '../assets/laptop.jpg';

const Login = () => {

  const authenticatedState = useSelector((state)=>state.authenticationReducer);
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [redirect, setRedirect] = useState("");

  const inputRef = useRef();

  const NAME = process.env.REACT_APP_NAME;
  const PASSWORD = process.env.REACT_APP_PASSWORD;

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
    if (formData.username === NAME && formData.password === PASSWORD) {
      return "success";
    } else {
      return "please try again";
    }
  };

  if (redirect === "success") {
    dispatch(authenticated())
    return <Redirect to={{ pathname: "/admin", username: formData.username }} />;
  } else if (redirect === "please try again") {
    // return <p>You flipped up</p>;
  }

  return (
    <main>
      
      <div className="login-container" style={{background: `linear-gradient(0deg, rgba(9,39,235,0.7) 0%, rgba(9,39,235,0.7) 100%), url(${Laptop})`}}>
          <div className="login-title">
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
          <button className="form-login-btn" onClick={submitHandler}>Login</button>
          {redirect==="please try again"&& <p className="warning">Wrong Name or Password</p>}
        </form>
      
    </main>
  );
};

export default Login;
