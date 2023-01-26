import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { Link } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs";

const ShoppingProductInfo = (props) => {
	const { dispatchCartAction } = useContext(CartContext);

	const addToCart = (product) => {
		dispatchCartAction({ type: "ADD", item: product });
	};

	return (
		<div className="bg-white p-4 hover:underline brightness-[.98] hover:brightness-100 ease-in duration-200">
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
				<Link to={`/productDetails/${props.product.id}`}>
					<h2 className="text-[15px]">{props.product.title}</h2>
				</Link>
				<p className="mt-4 bg-amber-100 block w-max px-2 rounded-full">
					$ {parseFloat(props.product.price).toFixed(2)}
				</p>
			</div>
		</div>
	);
};

export default ShoppingProductInfo;
