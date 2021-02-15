import React from 'react'
import userData from '../data/userData'
import {Link} from "react-router-dom"
import people from "../assets/people.jpg"

import User from './User'

const AllUsers = (allData) => {

    const userList = userData.map((user) => (
        <>
             <User key={user.id} user={user} />
         </>
     ))
     
    return (
        <div className="all-users" >
            <header style={{background: `linear-gradient(0deg, rgba(9,39,235,0.7) 0%, rgba(9,39,235,0.7) 100%), url(${people})`}}>
                <h1 className="user-list-title">Employee List</h1>
                <Link to="/employeeRegister"><button className="top-right-btn">Employee Register</button></Link>
            </header>
            <div className="user-container">
                {userList}
                <h1>halo</h1>
            </div>
        </div>
    )
}

export default AllUsers
