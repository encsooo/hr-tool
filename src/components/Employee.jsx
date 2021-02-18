import React from "react";
import Train from "../assets/train.jpg";
import allData from "../data/userData"

export default function Employee (props){
    let userID = props.location.id;
    let userData = allData.find(user => user.id === userID);
    console.log(userData);
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
            <p>{userData.email}</p>
            <p>{userData.mobile} <i class="fas fa-pencil-alt"></i></p>
            <p><b>Emergency Contact: </b>{userData.emergencyContact}</p>
        </div>
        </>
    )
}