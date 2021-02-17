const initialState = {
        employees: []
}

export const employeeReducer = (state = initialState, action) => {
    if (action.type === 'ADD_EMPLOYEE') {
        const storageData = JSON.parse(localStorage.getItem('myData'))

        const updatedStorageData = [...storageData, action.payload]

        localStorage.setItem('myData', JSON.stringify(updatedStorageData))

        return {...state, employees: [...state.employees, action.payload]}
    } else if (action.type === "GET_EMPLOYEES") {
        console.log("reducer");
        return { ...state, employees: [...state.employees, ...JSON.parse(localStorage.getItem('myData'))] }
    } else {
        return state
    }
}
