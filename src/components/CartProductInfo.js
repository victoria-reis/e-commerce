import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { Link } from "react-router-dom";

const CartProductInfo = (props) => {
	const { dispatchCartAction } = useContext(CartContext);

	const addToCart = (product) => {
		dispatchCartAction({ type: "ADD", item: product });
		// console.log(`Added ${product.title} of id ${product.id} to my cart!`);
	};

	const removeFromCart = (product) => {
		dispatchCartAction({ type: "REMOVE", item: product });
		// console.log(`Added ${product.title} of id ${product.id} to my cart!`);
	};

	return (
		<div>
			<img src={props.item.image} alt="" />
			<Link to={`/productDetails/${props.item.id}`}>{props.item.title}</Link>
			<p>$ {parseFloat(props.item.unitPrice).toFixed(2)}</p>
			<p>$ {parseFloat(props.item.totalPrice).toFixed(2)}</p>
			<div>
				<button
					onClick={() => {
						addToCart(props.item);
					}}
				>
					+
				</button>
				<p>{props.item.amount}</p>
				<button
					onClick={() => {
						removeFromCart(props.item);
					}}
				>
					-
				</button>
			</div>
		</div>
	);
};

export default CartProductInfo;
