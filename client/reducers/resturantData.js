const initialState = {
    resturantData: {}
}

const resturantDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_RESTURANT_DATA':
            return {
                ...state,
                resturantData: action.data
            }

        default:
            return state
        }
}

export default resturantDataReducer
