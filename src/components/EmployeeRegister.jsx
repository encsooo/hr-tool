import React from 'react'

const EmployeeRegister = () => {
    return (
        <div className="register-container">
                <h2 className="register-title">Empolyee Register</h2>
      <form action="">
        <label className="register-label" for="fname">
          First name:
        </label>
        <input
          className="register-input"
          type="text"
          id="fname"
          name="fname"
          value="John"
        />

        <label className="register-label" for="lname">
          Last name:
        </label>
        <input
          className="register-input"
          type="text"
          id="lname"
          name="lname"
          value="Doe"
        />

        <label className="register-label" for="title">
          Job title:
        </label>
        <input
          className="register-input"
          type="text"
          id="title"
          name="title"
          value="title"
        />

        <input
          className="register-checkbox"
          type="checkbox"
          id="admin"
          name="admin"
          value="isadmin"
        />
        <label className="register-checkbox-label" for="admin">
          Admin
        </label>

        <button className="register-btn">Submit</button>
      </form>
        </div>
    )
}

export default EmployeeRegister
