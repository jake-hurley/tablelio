import { combineReducers } from 'redux'

import categoryReducer from './category'
import cartReducer from './cart'
import itemViewReducer from './itemView'
import resturantDataReducer from './resturantData'
import isLoadedReducer from './isLoaded'

const allReducer = combineReducers({
    category: categoryReducer,
    cart: cartReducer,
    itemView: itemViewReducer,
    resturantData: resturantDataReducer,
    isLoaded: isLoadedReducer
})

export default allReducer


