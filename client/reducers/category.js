const categoryReducer = (state = '', action) => {
    switch(action.type) {
        case 'CATEGORY':
            return {
                category: action.category
            }

        default:
            return state
        }
}

export default categoryReducer
