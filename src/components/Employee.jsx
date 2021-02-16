import React, { useState, useEffect} from "react";
import Train from "../assets/train.jpg";
// import allData from "../data/userData"

export default function Employee (props){
    const userID = "3Zwx0nzciRtcnoMgoJbyW";
    const allData = JSON.parse(localStorage.getItem("myData"))
    console.log(allData[0].id)
    console.log(userID);
    const userData = allData.find(user => user.id === userID);
    const [toggleEdit,setToggleEdit] = useState(false)
    const [editInfo, setEditInfo] = useState(userData)
    const [submitChange, setSubmitChange]= useState(false)

    

    // toggle input
    function showEditInput(e){
        setToggleEdit(!toggleEdit)
    }

    function changeInfo(e){
        e.preventDefault();
        setEditInfo({...userData, [e.target.name]: e.target.value})
    }

    function submitChangeInfo(e){
        
    }

   
    return(
        <>
        <div className="header-container" style={{background: `linear-gradient(0deg, rgba(9,39,235,0.7) 0%, rgba(9,39,235,0.7) 100%), url(${Train})`}}>
            <h2 className="header-title">{userData.username}</h2>
        </div>
        <div className="employee-main">
            <p>{userData.firstName} {userData.secondName} | {userData.title}</p>
            <p>{userData.email} <button className="edit-employee-btn">Edit</button></p>
            <p>{userData.mobile} <button className="edit-employee-btn">Edit</button></p>
            <p>
                <b>Emergency Contact: </b> 
                {submitChange? editInfo.emergencyContact : userData.emergencyContact}
                <button className="edit-employee-btn" onClick={showEditInput}>Edit</button>

            </p>
            {toggleEdit && 
                <form>
                    <input type="text" name="emergencyContact" onChange={changeInfo}></input>
                    <button className="edit-employee-btn" onClick={submitChangeInfo}>change</button>
                    
                </form>
            }
            

        </div>
        </>
    )
}