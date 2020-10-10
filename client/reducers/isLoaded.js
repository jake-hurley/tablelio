const initialState = {
    isLoaded: false
}

const isLoadedReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'IS_LOADED':
            return {
                ...state,
                isLoaded: true
            }

        default:
            return state
        }
}

export default isLoadedReducer
