import React, { useState, useRef, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { adminLogin,employeeLogin }  from "../store/actions/authenticationAction"
import {getEmployeesAction} from "../store/actions/employeesActions"
import Laptop from '../assets/laptop.jpg';
import allData from "../data/userData";

const Login = () => {
  useEffect(() => {
    //RESET THE LOCAL STORAGE WITH ALL DATA 
          // const allDataJson = JSON.stringify(allData)
          //localStorage.setItem('myData', allDataJson)
    dispatch(getEmployeesAction())
  }, [])
 

  // FOR THE GO BACK 
  const history = useHistory()

  // REDUX
  const authenticatedState = useSelector((state) => state.authenticationReducer);
  const dispatch = useDispatch()

  //GET EMPLOYEES DATA FROM LOCAL STORAGE
  const employeesData = useSelector((state) => {
    return state.employeesReducer.employees
   })

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
    // FINDS OUT IF THE USER IS ADMIN EMPLOYEE OR DOESNT EXIST
    const permissionCheck = employeesData.reduce((acc,user)=>{
      if(formData.username===user.username && formData.password===user.password && user.admin){
        acc = "admin"
      } else if(formData.username===user.username && formData.password===user.password && !user.admin){
        acc = "employee"
        setUserID(user.id)
      }
      return acc
    },"")
   
    // IF THE REDUCER RETURNS EMPTY IT MEANS THE USER DOESNT EXIST OR THE PASSWORD IS WRONG
    if(permissionCheck===""){
      return "wrong"
    }else{
      return permissionCheck
    }
  };

  if (redirect === "admin") {
    // SET AUTHENTICATED TO TRUE
    dispatch(adminLogin(formData.username))
    return <Redirect to={{ pathname: "/admin", username: formData.username }} />;
  } else if (redirect === "employee") {
    dispatch(employeeLogin(formData.username))
    return <Redirect to={{ pathname: "/employee", id: userID}} />;
  }


  return (
    <main>
      <div className="header-container" style={{background: `linear-gradient(0deg, rgba(9,39,235,0.7) 0%, rgba(9,39,235,0.7) 100%), url(${Laptop})`}}>
          <button
              className="top-right-btn"
              onClick={() => history.push("/")}
            >
          To Main Page
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
          <button className="login-btn" onClick={submitHandler}>Login</button>
          {redirect==="wrong"&& <p className="warning">Wrong Name or Password</p>}
        </form>
      
    </main>
  );
};

export default Login;
