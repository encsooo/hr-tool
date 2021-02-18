import React, { useState, useRef } from 'react'

const User = ({user}) => {
    const {id, firstName, secondName, title, username, admin, urlPhoto, email, mobile, start, emergencyContact} = user

    const [dropdown, setDropdown] = useState(false);
    const toggleDropdown = () => setDropdown(!dropdown)

    return (
        <div key={id} className="individual-user">
            <img src={urlPhoto} alt={firstName}/>
            <h3>{firstName} {secondName}</h3>
            <h4>ID: {username}</h4>
            <h4>{title}</h4>
            <div className={dropdown ? `${"toggle-active"}` : `${"toggle-inactive"}`}>
                <p>Admin: {admin ? "yes" : "no"}</p>
                <p>Email: {email}</p>
                <p>Phone: {mobile}</p>
                <p>With the company since {start}</p>
                <p>In case of emergency, call: {emergencyContact}</p>
            </div>
            <button className="dropdown-info-btn" onClick={() => toggleDropdown()}>{dropdown ? `${"less..."}` : `${"more..."}`}</button>
        </div>
    )
}

export default User
