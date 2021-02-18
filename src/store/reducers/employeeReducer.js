const initialState = {
        employees: []
}

export const employeeReducer = (state = initialState, action) => {
    switch  (action.type) {
        case 'ADD_EMPLOYEE':
            let storageData = JSON.parse(localStorage.getItem('myData'))
            const updatedStorageData = [...storageData, action.payload]
            localStorage.setItem('myData', JSON.stringify(updatedStorageData))
            return { ...state, employees: [...state.employees, action.payload] }
        
        case 'DELETE_EMPLOYEE':
            let storageData2 = JSON.parse(localStorage.getItem('myData'))
            const filteredStorageData = storageData2.filter((employee)=>employee.id!==action.payload)
            localStorage.setItem('myData', JSON.stringify(filteredStorageData))
            return { ...state, employees: filteredStorageData }
        
        case "GET_EMPLOYEES" :
            return { ...state, employees: [...state.employees, ...JSON.parse(localStorage.getItem('myData'))] }
        
        default:
            return state
    }
}
