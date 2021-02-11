import React from 'react'

const EmployeeRegister = () => {
    return (
        <div>
                <h2 className="admin-title">Empolyee Register</h2>
      <form action="">
        <label className="admin-label" for="fname">
          First name:
        </label>
        <input
          className="admin-input"
          type="text"
          id="fname"
          name="fname"
          value="John"
        />

        <label className="admin-label" for="lname">
          Last name:
        </label>
        <input
          className="admin-input"
          type="text"
          id="lname"
          name="lname"
          value="Doe"
        />

        <label className="admin-label" for="title">
          Job title:
        </label>
        <input
          className="admin-input"
          type="text"
          id="title"
          name="title"
          value="title"
        />

        <input
          className="admin-checkbox"
          type="checkbox"
          id="admin"
          name="admin"
          value="isadmin"
        />
        <label className="admin-checkbox-label" for="admin">
          Admin
        </label>

        <button className="admin-btn">Submit</button>
      </form>
        </div>
    )
}

export default EmployeeRegister
