import {
    ProductsReducer,ProductDetail
} from "./Reducers/ProductsReducer"
import {
    combineReducers,
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    allProducts: ProductsReducer,
    selectedProduct: ProductDetail
})



export const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))