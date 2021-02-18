import React from 'react'
import userData from '../data/userData'

import User from './User'

const AllUsers = () => {

    const userList = userData.map((user) => (
        <>
             <User key={user.id} user={user} />
         </>
     ))
     
    return (
        <div className="all-users" >
           
            <div className="user-container">
                {userList}
                <h1>halo</h1>
            </div>
        </div>
    )
}

export default AllUsers
