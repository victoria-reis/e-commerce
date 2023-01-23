import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { Link } from "react-router-dom";

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
			<Link to={`/productDetails/${props.product.id}`}>
				<img src={props.product.image} alt="" />
			</Link>
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
