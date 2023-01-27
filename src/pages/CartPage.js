import React, { useContext } from "react";
import { CartContext } from "../store/CartContext";
import CartProductInfo from "../components/CartProductInfo";

const CartPage = () => {
	const { cartState } = useContext(CartContext);
	return (
		<>
			<h2 className="text-center text-3xl font-bold mt-6 sm:mt-14">
				My Cart ({cartState.totalAmount})
			</h2>
			<div className=" pb-12 sm:pb-20">
				{cartState.items.length > 0 ? (
					<div className="my-6 sm:my-10">
						{cartState.items.map((item) => {
							return <CartProductInfo key={item.id} item={item} />;
						})}
					</div>
				) : (
					// <div className="flex flex-col h-[80vh]">
					<div className="flex flex-col justify-center h-[70vh] md:h-[80vh]">
						{/* <p className="block w-max mx-auto justify-self-center"> */}
						<p className="block w-max mx-auto text-2xl">Your cart is empty!</p>
					</div>
				)}
				<p className="block w-max mx-auto md:ml-auto md:mr-24 text-xl bg-amber-300 px-4 py-2 rounded-full">
					TOTAL: ${parseFloat(cartState.totalPrice).toFixed(2)}
				</p>
				{cartState.items.length > 0 && (
					<button className="block w-max mx-auto mt-10 bg-amber-300 px-12 py-4 rounded-full text-2xl hover:scale-105 ease-in duration-200">
						Checkout
					</button>
				)}
			</div>
		</>
	);
};

export default CartPage;
