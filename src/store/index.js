import { applyMiddleware, combineReducers, createStore } from 'redux'
import {thunk} from 'redux-thunk'
import { categoriesReducer } from './categoriesReducer'
import { productsListReducer } from './productsListReducer'
import { productsItemReducer } from './productsItemReducer'
import { countReducer } from './countReducer'
import { cartReducer } from './cartReducer'

const rootReducer = combineReducers({
    productsList: productsListReducer,
    productsItem: productsItemReducer,
    categories: categoriesReducer,
    count: countReducer,
    cartList: cartReducer
})
 
export const store = createStore(rootReducer, applyMiddleware(thunk))