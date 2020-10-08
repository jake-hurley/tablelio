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