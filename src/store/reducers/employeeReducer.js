const initialState = {
        employees: []
}
let storageData = JSON.parse(localStorage.getItem('myData'))

export const employeeReducer = (state = initialState, action) => {
    switch  (action.type) {
        case 'ADD_EMPLOYEE':
            const updatedStorageData = [...storageData, action.payload]
            localStorage.setItem('myData', JSON.stringify(updatedStorageData))
            return {...state, employees: [...state.employees, action.payload]}
        case 'DELETE_EMPLOYEE':
            const filteredStorageData = storageData.filter((employee)=>employee.id!==action.payload)
            localStorage.setItem('myData', JSON.stringify(filteredStorageData))
            return { employees: filteredStorageData}
        case "GET_EMPLOYEES" :
            return { ...state, employees: [...state.employees, ...JSON.parse(localStorage.getItem('myData'))] }
        default:
            return state
    }
}
