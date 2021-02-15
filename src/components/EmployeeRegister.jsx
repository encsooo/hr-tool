import React, {useState} from 'react';  
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import allData from "../data/userData"
import userData from "../data/userData"
import {nanoid} from "nanoid"

const EmployeeRegister = () => { 
    // const isAuthenticated = useSelector((state) => state);
    // if (!isAuthenticated) return <Redirect to="/notFound404" />;

    const [formData, setFormData] = useState({
        id: "",
        firstName: "",
        secondName: "",
        title: "",
        username: "",
        password: "",
        admin: false
    })
    console.log(allData);
  
  const changeHandler = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  
  const submitHandler = (e) => {
    e.preventDefault()
    allData.push({...formData, id: nanoid()})
    setFormData({
        id: "",
        firstName: "",
        secondName: "",
        title: "",
        username: "",
        password: "",
        admin: false
    })
  }
 
  console.log("re-render")

    return (
      <div className="register-container">
        <h2 className="register-title">Employee Register</h2>
      <form>
        <label className="register-label" htmlFor="firstName">
          First name:
        </label>
        <input onChange={changeHandler}
          className="register-input"
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
        />

        <label className="register-label" htmlFor="secondName">
          Last name:
        </label>
        <input onChange={changeHandler}
          className="register-input"
          type="text"
          id="secondName"
          name="secondName"
          value={formData.secondName}
        />

        <label className="register-label" htmlFor="title">
          Job title:
        </label>
        <input onChange={changeHandler}
          className="register-input"
          type="text"
          id="title"
          name="title"
          value={formData.title}
        />

        <input onChange={changeHandler}
          className="register-checkbox"
          type="checkbox"
          id="admin"
          name="admin"
          checked={formData.admin}
        />
        <label className="register-checkbox-label" htmlFor="admin">
          Admin
        </label>

        <button onClick={submitHandler} className="register-btn">Submit</button>
        </form>
        <div>
          {allData.map((employee) =>
            <div key={employee.id} className="submited-data">
              <h3>{employee.id}</h3>
              <h3>{employee.firstName}</h3>
              <h3>{employee.secondName}</h3>
              <h3>{employee.title}</h3>
              <h3>{employee.admin}</h3>
            </div>)
          }
        </div> 
      </div>
    )
}

export default EmployeeRegister
