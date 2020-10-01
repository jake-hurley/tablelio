import { combineReducers } from 'redux'

import categoryReducer from './category'

const allReducer = combineReducers({
    category: categoryReducer
})

export default allReducer


