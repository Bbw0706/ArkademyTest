import axios from "axios";

const getCart = () => {
	return {
		type : "GET_CART",
	}
} 

const postCart = (detail, qty) => {
	return {
		type : "POST_CART",
		payload : {
			data : {...detail, qty},
		}
	}
} 

export {
	getCart,
	postCart
}