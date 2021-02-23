export const authenticationReducer = (authentication = false, action) => {
    switch(action.type) {
        case "ADMIN_LOGIN":
            authentication = true
            return "admin";
        case "EMPLOYEE_LOGIN":
            authentication = true
            return "employee"
        default:
            return false;
    }
  

}