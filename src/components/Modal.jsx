import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { useDispatch } from 'react-redux'
import { editEmployeesAction } from "../store/actions/employeesActions"

// STYLES FOR THE MODAL
const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '48%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '6rem',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.139)',
    zIndex: 1000
}

export default function Modal({ open, onClose}) {
    
    const dispatch = useDispatch()
    // GET THE VALUES FROM THE FORM
    const [formData, setFormData] = useState({
        firstName: "",
        secondName: "",
        title: "",
        admin: false
    })
  
    const changeHandler = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(editEmployeesAction())
    }

    if (!open) return null
    return ReactDom.createPortal (
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                <button className="onclose-btn table-btn" onClick={onClose}> <i class="fa fa-times"></i> </button>

                <form className="modal-form" onSubmit={submitHandler}>
                    <div className="flex-item">
                        <label className="modal-label" htmlFor="firstName"></label>
                        <input onChange={changeHandler}
                            className="modal-input"
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            placeholder="First Name"
                        />
                    </div>
                    
                    <div className="flex-item">
                        <label className="modal-label" htmlFor="secondName"></label>
                        <input onChange={changeHandler}
                            className="modal-input"
                            type="text"
                            id="secondName"
                            name="secondName"
                            value={formData.secondName}
                            placeholder="Last Name"
                        />
                    </div>
                    

                    <div className="flex-item">
                        <label className="modal-label" htmlFor="title"></label>
                        <input onChange={changeHandler}
                            className="modal-input"
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            placeholder="Title"
                        />
                    </div>
                    
                    <div className="checkbox-container">
                        <input onChange={changeHandler}
                            className="modal-checkbox"
                            type="checkbox"
                            id="admin"
                            name="admin"
                            checked={formData.admin}
                        />
                        <label className="modal-checkbox-label" htmlFor="admin">
                            Admin
                        </label>
                    </div>
                    
                    <div className="flex-item">
                        <input type="submit" className="register-btn" />
                    </div>
                    
                </form>

            </div>      
        </>,
        document.getElementById('portal')
        
    )
}
