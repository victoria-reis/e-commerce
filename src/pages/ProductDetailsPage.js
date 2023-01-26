import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TbTrashX } from "react-icons/tb";

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
		<div className="min-h-[95vh] bg-white flex items-center px-16">
			<div className="flex">
				<img
					src={product.image}
					alt={product.title}
					className="max-w-[450px]"
				/>
				<div className="ml-20 flex flex-col justify-between">
					<h2 className="text-3xl font-semibold">{product.title}</h2>
					<p className="leading-loose">Description: {product.description}</p>
					<p className="text-lg">${parseFloat(product.price).toFixed(2)}</p>
					<div className="flex mb-8 w-max">
						<button
							onClick={() => {
								addToCart(product);
							}}
							className=" bg-amber-300 rounded-full w-max px-4 py-1 hover:scale-105 ease-in block"
						>
							Add to Cart
						</button>
						<button
							onClick={() => {
								removeFromCart(product);
							}}
							className=" bg-amber-100 rounded-full w-max px-2 py-2 hover:scale-105 ease-in block text-2xl ml-10"
						>
							<TbTrashX />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetailsPage;
