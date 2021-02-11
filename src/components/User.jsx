import React from 'react'

const User = ({ user }) => {
    const {id, firstName, secondName, title, username, admin, urlPhoto} = user
    return (
        <div>
            <img src={urlPhoto} alt={firstName}/>
            <h3>{firstName} {secondName}</h3>
            <h4>ID: {id} - {username}</h4>
            <h4>{title}</h4>
            <h4>Admin: {admin}</h4>
        </div>
    )
}

export default User
