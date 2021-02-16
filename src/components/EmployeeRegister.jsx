import React, {useState} from 'react';  
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import allData from "../data/userData"
import { nanoid } from "nanoid"
import people from "../assets/people.jpg"

const EmployeeRegister = () => { 
    // const isAuthenticated = useSelector((state) => state);
    // if (!isAuthenticated) return <Redirect to="/notFound404" />;

  
  
  const allDataJson = JSON.stringify(allData)


    const [formData, setFormData] = useState({
        firstName: "",
        secondName: "",
        title: "",
        username: "",
        password: "",
        id: "",
        admin: false
    })
    console.log(allData);
  
  const changeHandler = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  
  const submitHandler = (e) => {
    e.preventDefault()
    
    const storageData = JSON.parse(localStorage.getItem('myData'))

    const updatedStorageData = [...storageData, formData]

    console.log(formData);
    console.log(updatedStorageData);
    localStorage.setItem('myData', JSON.stringify(updatedStorageData))
    
    setFormData({
      firstName: "",
      secondName: "",
      title: "",
      username: "",
      password: "",
      id: "",
      admin: false
    })
    
  }
 

  return (
    <>
      <div className="header-container" style={{background: `linear-gradient(0deg, rgba(9,39,235,0.7) 0%, rgba(9,39,235,0.7) 100%), url(${people})`}} >
        <div className="header-title"><h2>Employee Register</h2></div>
      </div>
      <div className="register-container">

      <form className="register-form" onSubmit={submitHandler}>
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

        <input type="submit" className="register-btn"/>
        
      </form>
      <table className="employees-container">
        {allData.map((employee) =>
          <tr key={employee.id} className="registered-employee">
            <td>{employee.firstName}</td>
            <td>{employee.secondName}</td>
            <td>{employee.title}</td>
            <td>{employee.id}</td>
            <td>{employee.admin}</td>
          </tr>)
        }
      </table> 
      </div>
    </>
    )
}

export default EmployeeRegister
