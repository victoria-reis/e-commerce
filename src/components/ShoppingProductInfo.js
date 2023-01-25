import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { Link } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";

const ShoppingProductInfo = (props) => {
	const { dispatchCartAction } = useContext(CartContext);

	const addToCart = (product) => {
		dispatchCartAction({ type: "ADD", item: product });
		// console.log(`Added ${product.title} of id ${product.id} to my cart!`);
	};

	// const removeFromCart = (product) => {
	// 	dispatchCartAction({ type: "REMOVE", item: product });
	// 	// console.log(`Added ${product.title} of id ${product.id} to my cart!`);
	// };

	return (
		<div className="bg-white p-4 hover:underline">
			<div className="relative">
				<Link to={`/productDetails/${props.product.id}`}>
					<img
						src={props.product.image}
						alt={props.product.title}
						className="w-[55%] mx-auto py-10"
					/>
				</Link>
				<button
					onClick={() => {
						addToCart(props.product);
					}}
					className="absolute top-0 right-0 hover:scale-125 ease-in duration-200"
				>
					<BsPlusCircleFill className="text-amber-300 text-3xl" />
				</button>
				{/* <button
					onClick={() => {
						removeFromCart(props.product);
					}}
				>
					remove
				</button> */}
				<Link
					to={`/productDetails/${props.product.id}`}
					className="text-[15px]"
				>
					{props.product.title}
				</Link>
				<p className="mt-4 bg-amber-100 block w-max px-2">
					$ {parseFloat(props.product.price).toFixed(2)}
				</p>
			</div>
		</div>
	);
};

export default ShoppingProductInfo;
