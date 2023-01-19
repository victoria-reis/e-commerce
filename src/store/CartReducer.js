import React from "react";

export const initialCartState = {
	items: [],
	totalAmount: 0,
	totalPrice: 0,
	counter: 0,
};

export const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		const updatedItems = [...state.items, action.item];
		return { items: updatedItems };
	}

	if (action.type === "REMOVE") {
		const updatedItems = state.items.filter((item) => {
			return item.id !== action.item.id;
		});
		return { items: updatedItems };
	}
};
