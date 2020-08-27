const initialState = 0

const CountReducer=(state=initialState,action) => {
    switch(action.type)
    {
    case 'INCREMENT':
        return state + 1

    case 'DESCREMENT':
        return state - 1

    default:
        return state
    }
}

export default CountReducer;