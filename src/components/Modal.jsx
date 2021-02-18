import React from 'react'
import ReactDom from 'react-dom'
import EmployeeRegister from './EmployeeRegister'

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

export default function Modal({ open, onClose, submitHandler, changeHandler, formData, employee }) {
    if (!open) return null
    const { id, firstName, secondName, title, admin } = employee

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
