import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../store/CartContext";
import { BsBagFill } from "react-icons/bs";

const Header = () => {
	const { cartState } = useContext(CartContext);
	const [bounceAnimation, setBounceAnimation] = useState("");
	const screenWidth = window.innerWidth;

	useEffect(() => {
		if (cartState.totalAmount !== 0) {
			setBounceAnimation("animate-bounce");
			setTimeout(() => {
				setBounceAnimation("");
			}, 500);
			clearTimeout();
		}
	}, [cartState.totalAmount]);

	return (
		<div className="flex items-center justify-between bg-[rgba(243,244,246,0.75)] sticky top-0 z-10">
			{screenWidth < 550 ? (
				<h1 className="text-6xl tracking-tight">F4U</h1>
			) : (
				<h1 className="text-6xl">FASHION4U</h1>
			)}
			<nav className=" w-3/4 flex justify-evenly">
				<Link to="/" className="hover:scale-110 ease-in duration-100">
					Home
				</Link>
				<Link to="/shopping" className="hover:scale-110 ease-in duration-100">
					Shop
				</Link>
				<Link to="/contact" className="hover:scale-110 ease-in duration-100">
					Contact
				</Link>
			</nav>
			<div className={`relative sm:mr-10 ${bounceAnimation}`}>
				<Link to="/cart">
					<BsBagFill className="text-[30px]" />
					<div className="absolute text-[14px] text-white w-full top-[8px]">
						<p className="block w-min mx-auto">{cartState.totalAmount}</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
