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

const deleteCart = (id) => {
	return {
		type : "DELETE_POST",
		payload : id
	}
} 


export {
	getCart,
	postCart,
	deleteCart
}