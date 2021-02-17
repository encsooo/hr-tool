export const authenticationReducer = (authentication = false, action) => {
    switch(action.type) {
        case "AUTHENTICATED":
            return true;
        case "WRONGLOGIN":
            return false;
        default:
            return false;
    }
}