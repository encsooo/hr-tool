import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Train from "../assets/train.jpg";
import allData from "../data/userData";
import { getEmployeesAction } from "../store/actions/employeesActions";
import { employeeLogin } from "../store/actions/authenticationAction";

export default function Employee (props){
    let userID = props.location.id;
   
    const isAuthenticated = useSelector((state) => state);

    // GET LOCAL STORAGE
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getEmployeesAction())
       dispatch(employeeLogin())
     }, [])

    const employeesData = useSelector((state) => {
        return state.employeesReducer.employees
    })

    let userData = employeesData.find(user => user.id === userID);


    if (!isAuthenticated.authReducer){ return <Redirect to="/notFound404" />;}
    else if(isAuthenticated.authReducer==="employee"){
    return(
        <>
        <div className="header-container" style={{background: `linear-gradient(0deg, rgba(9,39,235,0.7) 0%, rgba(9,39,235,0.7) 100%), url(${Train})`}}>
            <button className="top-right-btn" onClick={() => props.history.push("/")}>
               Log out
            </button>
            <h2 className="header-title">{userData.username}</h2>
        </div>
        <div className="employee-main">
            <p>{userData.firstName} {userData.secondName} | {userData.title}</p>
            <p>{userData.email}</p>
            <p>{userData.mobile} <i className="fas fa-pencil-alt"></i></p>
            <p><b>Emergency Contact: </b>{userData.emergencyContact}</p>
            <Link to= "/checkin"><button>Don't forget to check in</button></Link>
        </div>
        </>
    )
}
 }