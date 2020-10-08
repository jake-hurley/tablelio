import { combineReducers } from 'redux'

import categoryReducer from './category'
import cartReducer from './cart'
import itemViewReducer from './itemView'

const allReducer = combineReducers({
    category: categoryReducer,
    cart: cartReducer,
    itemView: itemViewReducer
})

export default allReducer


