const initialState = {
    itemInView: {}
}

const viewItemReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'VIEW_ITEM':
            return {
                ...state,
                itemInView: action.item
            }

        default:
            return state
        }
}

export default viewItemReducer
