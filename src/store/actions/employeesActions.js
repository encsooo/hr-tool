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

export const getEmployeesAction = () => {
    //console.log("action");
    return {
        type: 'GET_EMPLOYEES'
    }
}