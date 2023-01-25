import React from "react";
import { Link } from "react-router-dom";
import ShopAllImage from "../assets/shop-all.jpg";
import ShopMensImage from "../assets/shop-mens.jpg";
import ShopWomensImage from "../assets/shop-womens.jpg";

const HomePage = () => {
	return (
		<div className="grid grid-cols-2 gap-2">
			<Link
				to="/shopping"
				style={{ backgroundImage: `url(${ShopAllImage})` }}
				className="col-span-2 xl:h-[550px] h-[450px] bg-center bg-cover flex justify-center items-center brightness-[.85] hover:brightness-100 ease-in duration-200"
			>
				<h2 className="block w-max text-8xl text-white drop-shadow-lg">
					Shop All
				</h2>
			</Link>
			<Link
				to="/shopping/womens"
				style={{ backgroundImage: `url(${ShopWomensImage})` }}
				className="h-[700px] bg-center bg-cover flex justify-center items-center brightness-[.85] hover:brightness-100 ease-in duration-200"
			>
				<h2 className="block w-max xl:text-8xl text-6xl text-center text-white drop-shadow-lg">
					Shop Women's
				</h2>
			</Link>
			<Link
				to="/shopping/mens"
				style={{ backgroundImage: `url(${ShopMensImage})` }}
				className="h-[700px] bg-top xl-bg-top bg-cover flex justify-center items-center brightness-[.85] hover:brightness-100 ease-in duration-200"
			>
				<h2 className="block w-max xl:text-8xl text-6xl text-center text-white drop-shadow-lg">
					Shop Men's
				</h2>
			</Link>
		</div>
	);
};

export default HomePage;
