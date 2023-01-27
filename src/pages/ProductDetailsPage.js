import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TbTrashX } from "react-icons/tb";

import { ProductContext } from "../store/ProductContext";
import { CartContext } from "../store/CartContext";

const ProductDetailsPage = () => {
	const { id: productId } = useParams();
	const products = useContext(ProductContext);
	const { dispatchCartAction } = useContext(CartContext);

	const product = products.find((item) => {
		return item.id === parseFloat(productId);
	});

	const addToCart = (product) => {
		dispatchCartAction({ type: "ADD", item: product });
	};

	const removeFromCart = (product) => {
		dispatchCartAction({ type: "REMOVE", item: product });
	};

	return (
		<div className="lg:min-h-[95vh] bg-white flex items-center p-8 lg:p-16 lg:py-0">
			<div className="flex flex-col lg:flex-row items-center">
				<img
					src={product.image}
					alt={product.title}
					className="lg:w-[350px] w-[50%]"
				/>
				<div className="lg:ml-20 flex flex-col justify-between text-center lg:text-left mt-10 lg:mt-0">
					<h2 className="text-xl lg:text-3xl mb-4 font-semibold">
						{product.title}
					</h2>
					<p className="lg:leading-loose">Description: {product.description}</p>
					<p className="text-lg mt-8 lg:mb-8 bg-amber-100 block w-max px-2 rounded-full mx-auto lg:mx-0">
						${parseFloat(product.price).toFixed(2)}
					</p>
					<div className="flex lg:mb-8 w-max mx-auto lg:mx-0 mt-8 lg:mt-0">
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
							className=" bg-red-100 rounded-full w-max px-2 py-2 hover:scale-105 ease-in block text-2xl ml-10"
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
