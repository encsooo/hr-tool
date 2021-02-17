import React, {useState, useEffect} from 'react';  
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
// import allData from "../data/userData"
import { nanoid } from "nanoid"
import people from "../assets/people.jpg"
import { addEmployeeAction, getEmployeesAction } from "../store/actions/employeesActions"

const EmployeeRegister = () => { 
    // const isAuthenticated = useSelector((state) => state);
    // if (!isAuthenticated) return <Redirect to="/notFound404" />;
  
  useEffect(() => {
    dispatch(getEmployeesAction()) 
    console.log("useEffect");
  }, [])
  
  const dispatch = useDispatch()
  
  const employeesData = useSelector((state) => state.employeesReducer.employees)

  // const allDataJson = JSON.stringify(allData)
  // localStorage.setItem('myData', allDataJson)

    const [formData, setFormData] = useState({
        firstName: "",
        secondName: "",
        title: "",
        username: "",
        password: "",
        id: "",
        admin: false
    })
    console.log(employeesData);
  
  const changeHandler = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };
  
  const submitHandler = (e) => {
    e.preventDefault()
    
    dispatch(addEmployeeAction(formData)) 
    
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
        {employeesData.map((employee) =>
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
