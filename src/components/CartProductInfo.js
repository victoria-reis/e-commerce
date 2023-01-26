import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { Link } from "react-router-dom";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

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
		<div className="bg-white mb-2 flex items-center py-10 w-11/12 mx-auto">
			<Link to={`/productDetails/${props.item.id}`}>
				<img
					src={props.item.image}
					alt={props.item.title}
					className="w-[120px] min-w-[100px] mx-12"
				/>
			</Link>
			<div className="w-full mr-16 ml-4">
				<Link
					to={`/productDetails/${props.item.id}`}
					className="hover:underline"
				>
					{props.item.title}
				</Link>
				<p className="mt-4">${parseFloat(props.item.unitPrice).toFixed(2)}</p>
				<div className="flex items-center mt-5">
					<button
						onClick={() => {
							addToCart(props.item);
						}}
						className=""
					>
						<AiFillPlusCircle className="text-amber-300 text-2xl" />
					</button>
					<p className="text-xl mx-4">{props.item.amount}</p>
					<button
						onClick={() => {
							removeFromCart(props.item);
						}}
					>
						<AiFillMinusCircle className="text-amber-300 text-2xl" />
					</button>
					<p className="text-xl ml-auto">
						${parseFloat(props.item.totalPrice).toFixed(2)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CartProductInfo;
