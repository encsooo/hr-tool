import React from 'react'
import ReactDom from 'react-dom'
import EmployeeRegister from './EmployeeRegister'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '50px',
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
                <button onClick={onClose}>X</button>
                <form className="modal-form" onSubmit={submitHandler}>
                    <label className="modal-label" htmlFor="firstName"></label>
                    <input onChange={changeHandler}
                        className="modal-input"
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        placeholder="First Name"
                    />

                    <label className="modal-label" htmlFor="secondName"></label>
                    <input onChange={changeHandler}
                        className="modal-input"
                        type="text"
                        id="secondName"
                        name="secondName"
                        value={formData.secondName}
                        placeholder="Last Name"
                    />

                    <label className="modal-label" htmlFor="title"></label>
                    <input onChange={changeHandler}
                        className="modal-input"
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        placeholder="Title"
                    />
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
                    

                    <input type="submit" className="register-btn"/>
                </form>

            </div>      
        </>,
        document.getElementById('portal')
        
    )
}
