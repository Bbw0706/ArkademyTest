const initialState = {
	cardList : [],
	loading : false,
	error : ""
}


const cart = (state = initialState, action) => {
	switch(action.type){
		case `GET_CART_PENDING` : 
			return {
				...state,
				loading : true
			}
		case `GET_CART_FULFILLED` : 
			return {
				...state,
				cardList : state.cardList.concat(action.payload.data),
				loading : false
			}
		case `GET_CART_REJECTED` :
			return {
				...state,
				loading : false,
				error : "Something Wrong"
			}

		case `POST_CART` : 
			return {
				...state,
				cardList : state.cardList.concat(action.payload),
			}

		case `DELETE_POST` : 
			return {
				...state,
				cardList : state.cardList.filter((item, index) => item.data._id != action.payload),
			}

		default :
			return state;
	}
}

export default cart