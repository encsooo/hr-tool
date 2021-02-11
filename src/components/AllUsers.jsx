import React from 'react'
import userData from '../data/userData'

import User from './User'

const AllUsers = (allData) => {
    //const [user, setUser] = useState({});
    
    console.log(userData);

    const userList = userData.map((user) => (
        <div className="user-container">
             <User key={user.id} user={user} />
         </div>
     ))
     
    return (
        <div>
            {userList}
            <h1>halo</h1>
        </div>
    )
}

export default AllUsers
