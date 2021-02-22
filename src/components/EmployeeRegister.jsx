import React, {useState, useEffect} from 'react';  
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
// import allData from "../data/userData"
import { nanoid } from "nanoid"
import people from "../assets/people.jpg"
import { addEmployeeAction, getEmployeesAction, deleteEmployeeAction } from "../store/actions/employeesActions"
import userData from "../data/userData"
import Modal from "./Modal"

const EmployeeRegister = (props) => { 
  const history = useHistory()

  //const isAuthenticated = useSelector((state) => state);
  //if (!isAuthenticated) return <Redirect to="/notFound404" />;
  
  const [isOpen, setIsOpen] = useState(false)
  
   useEffect(() => {
    //  const allDataJson = JSON.stringify(allData)
    //  localStorage.setItem('myData', allDataJson)
     dispatch(getEmployeesAction()) 
   }, [])
  
   const dispatch = useDispatch()
  
   const employeesData = useSelector((state) => {
     return state.employeesReducer.employees
    })


    const [formData, setFormData] = useState({
        firstName: "",
        secondName: "",
        title: "",
        username: "",
        password: "",
        id: nanoid(),
        admin: false
    })
  
  const changeHandler = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  function randomUserName(formData){
    const firstName = formData.firstName.split("")
    const secondName = formData.secondName.split("")
    
    const randomUserName = `${firstName[Math.floor(Math.random() * Math.floor(firstName.length))]}${firstName[Math.floor(Math.random() * Math.floor(firstName.length))]}${firstName[Math.floor(Math.random() * Math.floor(firstName.length))]}${secondName[Math.floor(Math.random() * Math.floor(secondName.length))]}${secondName[Math.floor(Math.random() * Math.floor(secondName.length))]}${secondName[Math.floor(Math.random() * Math.floor(secondName.length))]}`

    return randomUserName;
  }

  function randomPassword(formData){
    const firstName = formData.firstName.split("")
    const secondName = formData.secondName.split("")
    
    const randomPassword = `${firstName[Math.floor(Math.random() * Math.floor(firstName.length))].toUpperCase()}${Math.floor(Math.random() * Math.floor(firstName.length))}${firstName[Math.floor(Math.random() * Math.floor(firstName.length))]}${firstName[Math.floor(Math.random() * Math.floor(firstName.length))].toUpperCase()}${Math.floor(Math.random() * Math.floor(firstName.length))}${secondName[Math.floor(Math.random() * Math.floor(secondName.length))]}${Math.floor(Math.random() * Math.floor(secondName.length))}${secondName[Math.floor(Math.random() * Math.floor(secondName.length))].toUpperCase()}${secondName[Math.floor(Math.random() * Math.floor(secondName.length))]}`

    return randomPassword;
  }

  
  const submitHandler = (e) => {
    e.preventDefault()

    const generatedRandomUserName = randomUserName(formData)
    formData.username = generatedRandomUserName

    const generatedRandomPassword = randomPassword(formData)
    formData.password = generatedRandomPassword

    dispatch(addEmployeeAction(formData)) 
    
    setFormData({
      firstName: "",
      secondName: "",
      title: "",
      username: "",
      password: "",
      id: nanoid(),
      admin: false
    })
  }

  const handleDelete = (employeeId) => {
    dispatch(deleteEmployeeAction(employeeId))
  }

  const [editToggle, setEditToggle] = useState(false)
  const handleEdit = () =>{
    setEditToggle(!editToggle)
  }

  
  return (
    <>
      <div className="header-container" style={{background: `linear-gradient(0deg, rgba(9,39,235,0.7) 0%, rgba(9,39,235,0.7) 100%), url(${people})`}} >
        <button className="top-right-btn" onClick={() => props.history.push("/")}>Log out</button>
        <button className="goback-btn" onClick={() => history.goBack()}>Go Back</button>
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
        <tr>
          <td><b>First Name</b></td>
          <td><b>Second Name</b></td>
          <td><b>Title</b></td>
          <td><b>Username</b></td>
          <td><b>Password</b></td>
          <td><b>ID</b></td>
          <td><b>Admin</b></td>
          <td><b>Edit</b></td>
          <td><b>Delete</b></td>
        </tr>
        {employeesData.map((employee) =>
          <tbody key={employee.id}>
          <tr className="registered-employee">
            <td>{employee.firstName}</td>
            <td>{employee.secondName}</td>
            <td>{employee.title}</td>
            <td>{employee.username}</td>
            <td>{employee.password}</td>
            <td>{employee.id}</td>
            <td>{employee.admin ? <i className="fas fa-check"></i> : ""}</td>

            <td><button className="table-btn" onClick={() => setIsOpen(true)}><i className="fas fa-pen"></i></button>
              <Modal open={isOpen} onClose={() => setIsOpen(false)} changeHandler={changeHandler} submitHandler={submitHandler} formData={formData} employee={employee}></Modal>
            </td>

            <td><button onClick={() => handleDelete(employee.id)} className="table-btn"><i className="fas fa-trash-alt"></i></button></td>
          </tr>
          </tbody>
          )
        }
      </table> 

      

      </div>
    </>
    )
}

export default EmployeeRegister
