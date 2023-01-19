import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";

const ProductInfo = (props) => {
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
			<div>
				<img src={props.product.image} alt="" />
			</div>
			<p>{props.product.title}</p>
			<p>$ {parseFloat(props.product.price).toFixed(2)}</p>
			<button
				onClick={() => {
					addToCart(props.product);
				}}
			>
				add to cart
			</button>
			<button
				onClick={() => {
					removeFromCart(props.product);
				}}
			>
				remove
			</button>
		</div>
	);
};

export default ProductInfo;
