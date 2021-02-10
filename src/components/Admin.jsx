import React from 'react'
import {useSelector} from "react-redux";
import {Redirect} from 'react-router-dom'

const Admin = () => {
    const isAuthenticated = useSelector(state => state)
    console.log("admin=>",isAuthenticated)

    if(!isAuthenticated) return <Redirect to="/"/>
    
    return (
        <>
        {isAuthenticated ? <h2>true</h2> : <h2>false</h2>}
        </>
    )
}

export default Admin