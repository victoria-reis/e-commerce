import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { ProductContext } from "../store/ProductContext";
import { CartContext } from "../store/CartContext";

const ProductDetailsPage = () => {
	const { id: productId } = useParams();
	const products = useContext(ProductContext);
	const { dispatchCartAction, cartState } = useContext(CartContext);

	const product = products.find((item) => {
		return item.id === parseFloat(productId);
	});

	console.log(cartState);

	const addToCart = (product) => {
		dispatchCartAction({ type: "ADD", item: product });
		// console.log(`Added ${product.title} of id ${product.id} to my cart!`);
	};

	const removeFromCart = (product) => {
		dispatchCartAction({ type: "REMOVE", item: product });
		// console.log(`Added ${product.title} of id ${product.id} to my cart!`);
	};

	// console.log(product);

	return (
		<div>
			<img src={product.image} alt="" />
			<h2>{product.title}</h2>
			<p>{product.description}</p>
			<p>$ {parseFloat(product.price).toFixed(2)}</p>
			<button
				onClick={() => {
					addToCart(product);
				}}
			>
				add to cart
			</button>
			<button
				onClick={() => {
					removeFromCart(product);
				}}
			>
				remove
			</button>
		</div>
	);
};

export default ProductDetailsPage;
