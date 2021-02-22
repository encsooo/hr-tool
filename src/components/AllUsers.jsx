import React from 'react'
import userData from '../data/userData'
import { Link, useHistory } from "react-router-dom"
import people from "../assets/people.jpg"
import User from './User'

const AllUsers = (allData) => {
    const history = useHistory()

    const userList = userData.map((user) => (
        <>
             <User key={user.id} user={user} />
         </>
     ))
    return (
    <>
        <div className="header-container" style={{background: `linear-gradient(0deg, rgba(9,39,235,0.7) 0%, rgba(9,39,235,0.7) 100%), url(${people})`}} >
            <div className="header-title"><h2>Employee List</h2></div>
            <Link to="/employeeRegister"><button className="top-right-btn">Employee Register</button></Link>
            <button className="goback-btn" onClick={() => history.goBack()}>Go Back</button>
        </div>
        <div className="user-container">
            {userList}
            <h1>halo</h1>
        </div>
    </>
    )
}
export default AllUsers