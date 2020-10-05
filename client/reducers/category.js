const initialState = {
    category: ''
}

const categoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CATEGORY':
            return {
                ...state,
                category: action.category
            }

        default:
            return state
        }
}

export default categoryReducer
