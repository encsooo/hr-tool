export const addEmployeeAction = (formData) => {
    return {
        type: 'ADD_EMPLOYEE',
        payload: formData
   }
}

export const deleteEmployeeAction = (employeeid) => {
    return {
        type: 'DELETE_EMPLOYEE',
        payload: employeeid
    }
}

export const editEmployeesAction = (employeeid) => {
    return {
        type: 'EDIT_EMPLOYEES',
        payload: employeeid
    }
}

export const getEmployeesAction = () => {
    return {
        type: 'GET_EMPLOYEES'
    }
}

