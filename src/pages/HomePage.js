import React from "react";
import { Link } from "react-router-dom";
import ShopAllImage from "../assets/shop-all.jpg";
import ShopMensImage from "../assets/shop-mens.jpg";
import ShopWomensImage from "../assets/shop-womens.jpg";

const HomePage = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
			<Link
				to="/shopping"
				style={{ backgroundImage: `url(${ShopAllImage})` }}
				className="sm:col-span-2 xl:h-[550px] sm:h-[450px] h-[250px] bg-center bg-cover flex justify-center items-center brightness-[.85] hover:brightness-100 ease-in duration-200"
			>
				<h2 className="block w-max text-5xl md:text-8xl text-white drop-shadow-lg">
					Shop All
				</h2>
			</Link>
			<Link
				to="/shopping/womens"
				style={{ backgroundImage: `url(${ShopWomensImage})` }}
				className="h-[450px] sm:h-[700px] sm:bg-center bg-cover flex justify-center items-center brightness-[.85] hover:brightness-100 ease-in duration-200"
			>
				<h2 className="block w-max xl:text-8xl text-5xl md:text-6xl text-center text-white drop-shadow-lg">
					Shop Women's
				</h2>
			</Link>
			<Link
				to="/shopping/mens"
				style={{ backgroundImage: `url(${ShopMensImage})` }}
				className="h-[450px] sm:h-[700px] bg-center xl:bg-bottom bg-cover flex justify-center items-center brightness-[.85] hover:brightness-100 ease-in duration-200"
			>
				<h2 className="block w-max xl:text-8xl text-5xl md:text-6xl text-center text-white drop-shadow-lg">
					Shop Men's
				</h2>
			</Link>
		</div>
	);
};

export default HomePage;
