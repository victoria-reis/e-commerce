import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";
import CartProductInfo from "../components/CartProductInfo";

const CartPage = () => {
	const { cartState } = useContext(CartContext);
	return (
		<>
			<p className="text-center text-3xl font-bold my-8">
				My Cart ({cartState.totalAmount})
			</p>
			<div>
				{cartState.items.length > 0 ? (
					cartState.items.map((item) => {
						return <CartProductInfo key={item.id} item={item} />;
					})
				) : (
					<p>Your cart is empty!</p>
				)}
			</div>
			<p>TOTAL: $ {parseFloat(cartState.totalPrice).toFixed(2)}</p>
		</>
	);
};

export default CartPage;
