import { combineReducers } from "redux";
import { authenticationReducer } from "./authenticationReducer";
import { employeeReducer } from "./employeeReducer";

export const allReducers = combineReducers({
    authReducer: authenticationReducer,
    employeesReducer: employeeReducer,
})