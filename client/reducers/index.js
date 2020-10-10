import { combineReducers } from 'redux'

import categoryReducer from './category'
import cartReducer from './cart'
import itemViewReducer from './itemView'
import resturantDataReducer from './resturantData'

const allReducer = combineReducers({
    category: categoryReducer,
    cart: cartReducer,
    itemView: itemViewReducer,
    resturantData: resturantDataReducer
})

export default allReducer


