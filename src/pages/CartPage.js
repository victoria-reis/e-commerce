import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";
import CartProductInfo from "../components/CartProductInfo";

const CartPage = () => {
	const { cartState } = useContext(CartContext);
	return (
		<div>
			<p>Cart Page!</p>
			{cartState.items.length > 0 ? (
				cartState.items.map((item) => {
					return <CartProductInfo key={item.id} item={item} />;
				})
			) : (
				<p>Your cart is empty!</p>
			)}
			<p>TOTAL: $ {parseFloat(cartState.totalPrice).toFixed(2)}</p>
		</div>
	);
};

export default CartPage;
