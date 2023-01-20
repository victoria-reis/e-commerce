export const initialCartState = {
	items: [],
	totalAmount: 0,
	totalPrice: 0,
};

const totalAmountSum = (array) => {
	return array.reduce((accumulator, currentValue) => {
		return accumulator + currentValue.amount;
	}, 0);
};

const totalPriceSum = (array) => {
	return array.reduce((accumulator, currentValue) => {
		return accumulator + currentValue.totalPrice;
	}, 0);
};

export const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		const newItem = {
			...action.item,
			amount: 1,
			unitPrice: action.item.price,
			totalPrice: action.item.price,
		};
		let updatedItem;
		let updatedItems;

		const existingItemIndex = state.items.findIndex((item) => {
			return item.id === newItem.id;
		});

		const existingItem = state.items[existingItemIndex];

		if (existingItem) {
			updatedItem = {
				...existingItem,
				amount: existingItem.amount + newItem.amount,
			};
			updatedItem.totalPrice = updatedItem.price * updatedItem.amount;
			updatedItems = [...state.items];
			updatedItems[existingItemIndex] = updatedItem;
		} else {
			updatedItems = [...state.items, newItem];
		}

		return {
			items: updatedItems,
			totalAmount: totalAmountSum(updatedItems),
			totalPrice: totalPriceSum(updatedItems),
		};
	}

	if (action.type === "REMOVE") {
		let updatedItems;
		const existingItemIndex = state.items.findIndex((item) => {
			return item.id === action.item.id;
		});

		const existingItem = state.items[existingItemIndex];

		if (existingItem) {
			if (existingItem.amount === 1) {
				updatedItems = state.items.filter((item) => {
					return item.id !== action.item.id;
				});
			} else {
				const updatedItem = {
					...existingItem,
					amount: existingItem.amount - 1,
				};
				updatedItem.totalPrice = updatedItem.price * updatedItem.amount;
				updatedItems = [...state.items];
				updatedItems[existingItemIndex] = updatedItem;
			}

			return {
				items: updatedItems,
				totalAmount: totalAmountSum(updatedItems),
				totalPrice: totalPriceSum(updatedItems),
			};
		}

		return state;
	}

	if (action.type === "CLEAR") {
		return { items: [], totalAmount: 0, totalPrice: 0 };
	}
};
