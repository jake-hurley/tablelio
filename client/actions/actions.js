export const category = (currentCategory) => {
    return {
        type: 'CATEGORY',
        category: currentCategory
    }
}

export const addToCart = (item) => {
        return {
            type: 'ADD_TO_CART',
            newItem: item
        }
}

export const removeFromCart = (item) => {
    return {
        type: "REMOVE_FROM_CART",
        item: item
    }
}

export const viewItem =  (item) => {
    return {
        type: 'VIEW_ITEM',
        item: item
    }
}

export const setResturantData = (data) => {
    return {
        type: 'SET_RESTURANT_DATA',
        data: data
    }
}

export const isLoaded = () => {
    return {
        type: 'IS_LOADED'
    }
}

export const updateOrder = (cartItem) => {
    return {
        type: 'UPDATE_ORDER',
        cart: cartItem
    }
}