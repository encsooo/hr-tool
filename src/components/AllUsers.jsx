import React from 'react'
import data from '../data/data'

import User from './User'

const AllUsers = () => {
    const userList = data.map((user) => (
        <div className="user-container">
            <User key={user.id} user={user} />
        </div>
    ))

    return (
        <div>
            {userList}
        </div>
    )
}

export default AllUsers
