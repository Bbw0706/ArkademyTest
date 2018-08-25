import { createStore, combineReducers, applyMiddleware} from "redux"
import middlewares from "./middleware.js"

import product from "./reducers/product.js";
import cart from "./reducers/cart.js";

const RootReducer = combineReducers({
	product,
	cart
})

const store = () => {
	return createStore(
		RootReducer,
		applyMiddleware(...middlewares)
	)
}

export default store