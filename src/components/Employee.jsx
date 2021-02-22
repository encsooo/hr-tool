import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Train from "../assets/train.jpg";
import allData from "../data/userData";
import { getEmployeesAction } from "../store/actions/employeesActions";
import { employeeLogin } from "../store/actions/authenticationAction";

export default function Employee (props){
    const [toggle, setToggle] = useState(true)
    const [start, setStart] = useState(false)
    let userID = props.location.id;
   
    const isAuthenticated = useSelector((state) => state);

    const handleToggle = () => {
        setToggle(!toggle)
        setStart(true)
    }

    const handleAnimation = () => {
        if (toggle && start) {
            return "animation-out"
        } else if (!toggle && start) {
            return "animation-in"
        } else {
            return "animation-neutral"
        }
    }

    console.log(isAuthenticated);
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
            <div>
            <p>{userData.firstName} {userData.secondName} | {userData.title}</p>
            <p>{userData.email}</p>
            <p>{userData.mobile} <i className="fas fa-pencil-alt"></i></p>
            <p><b>Emergency Contact: </b>{userData.emergencyContact}</p>
            <p>{userData.email} <i className="fas fa-pencil-alt"></i></p>
            <p>{userData.mobile} <i className="fas fa-pencil-alt"></i></p>
            <p>
                <b>Emergency Contact: {userData.emergencyContact} </b> 
            </p>
            </div>
            <div className="check-container">
                <div className={handleAnimation()}>
                    <h2>
                    {handleAnimation() === "animation-neutral" &&
                     <p><i class="fas fa-calendar-check"> Don't forget to check in, {userData.firstName}</i></p>
                    }
                        {handleAnimation() === "animation-in" &&
                     <p><i className="fas fa-mug-hot"> Good morning, {userData.firstName}</i></p>
                    }

                    {handleAnimation() === "animation-out" &&
                     <p><i className="fas fa-moon">Goodbye, {userData.firstName}</i></p>
                    }
                    </h2>
                </div>
                <button className="checkin-btn" onClick={handleToggle}>Check {toggle ? "in" : "out"}</button>
            </div>

        </div>
        </>
    )
}
 }