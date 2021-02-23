export const adminLogin = (username) =>{
    return{
        type: "ADMIN_LOGIN",
        payload: username
    }
}

export const employeeLogin = (username)=>{
    return{
        type: "EMPLOYEE_LOGIN",
        payload: username
    }
}