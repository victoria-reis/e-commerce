import React, { useReducer } from "react";
import { cartReducer, initialCartState } from "./CartReducer";

export const CartContext = React.createContext();

export const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		initialCartState
	);

	return (
		<CartContext.Provider value={{ cartState, dispatchCartAction }}>
			{props.children}
		</CartContext.Provider>
	);
};
