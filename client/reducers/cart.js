const initialState = {
    cart: [],
    cartTotal: 0,
    order: [],
    totalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
                cartTotal: state.cartTotal + action.item.price
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(cartItem => cartItem.id !== action.item.id ),
                cartTotal: state.cartTotal - action.item.price
            }

        case 'UPDATE_ORDER':
                return {
                    ...state,
                    order: [...state.order, action.cart],
                    totalPrice: state.totalPrice + action.totalPrice
                }

        default:
            return state
        }
}

export default cartReducer
