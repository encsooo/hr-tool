import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Train from "../assets/train.jpg";
import allData from "../data/userData";
export default function Employee (props){
    const [toggle, setToggle] = useState(true)
    const [start, setStart] = useState(false)
    let userID = props.location.id;
    let userData = allData.find(user => user.id === userID);
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
            <p>{userData.mobile} <i class="fas fa-pencil-alt"></i></p>
            <p><b>Emergency Contact: </b>{userData.emergencyContact}</p>
            <p>{userData.email} <button className="edit-employee-btn">Edit</button></p>
            <p>{userData.mobile} <button className="edit-employee-btn">Edit</button></p>
            <p>
                <b>Emergency Contact: {userData.emergencyContact} </b> 
            </p>
            </div>
            <div className="check-container">
                <div className={handleAnimation()}></div>
                <h2 className="checkin-h2">Don't forget to check {toggle ? "in" : "out"}, {userData.firstName}</h2>
                <button className="checkin-btn" onClick={handleToggle}>Check {toggle ? "in" : "out"}</button>
            </div>

        </div>
        </>
    )
}
}