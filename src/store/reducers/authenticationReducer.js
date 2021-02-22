export const authenticationReducer = (authentication = false, action) => {
    switch(action.type) {
        case "ADMIN_LOGIN":
            return "admin";
        case "EMPLOYEE_LOGIN":
            return "employee"
        default:
            return false;
    }
}