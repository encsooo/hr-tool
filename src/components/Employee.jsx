import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Train from "../assets/train.jpg";
import allData from "../data/userData";

export default function Employee (props){
    let userID = props.location.id;
    let userData = allData.find(user => user.id === userID);
    const isAuthenticated = useSelector((state) => state);

    console.log(isAuthenticated);

    if (!isAuthenticated.authReducer){ return <Redirect to="/notFound404" />;}
    else if(isAuthenticated.authReducer==="employee"){
    return(
        <>
        <div className="header-container" style={{background: `linear-gradient(0deg, rgba(9,39,235,0.7) 0%, rgba(9,39,235,0.7) 100%), url(${Train})`}}>
            <button className="notfound-btn" onClick={() => props.history.push("/")}>
                >>> Log out
            </button>
            <h2 className="header-title">{userData.username}</h2>
        </div>
        <div className="employee-main">
            <p>{userData.firstName} {userData.secondName} | {userData.title}</p>
            <p>{userData.email} <button className="edit-employee-btn">Edit</button></p>
            <p>{userData.mobile} <button className="edit-employee-btn">Edit</button></p>
            <p>
                <b>Emergency Contact: {userData.emergencyContact} </b> 
            </p>
            

        </div>
        </>
    )
}
}