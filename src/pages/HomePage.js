import React from "react";
import { Link } from "react-router-dom";
import ShopAllImage from "../assets/shop-all.jpg";
import ShopMensImage from "../assets/shop-mens.jpg";
import ShopWomensImage from "../assets/shop-womens.jpg";

const HomePage = () => {
	return (
		<div className="flex flex-wrap">
			<Link
				to="/shopping"
				style={{ backgroundImage: `url(${ShopAllImage})` }}
				className="w-full h-[500px] bg-center bg-cover flex justify-center items-center brightness-[.85] hover:brightness-100 ease-in duration-200"
			>
				<h2 className="block w-max text-8xl text-white">Shop All</h2>
			</Link>
			<Link
				to="/shopping/womens"
				style={{ backgroundImage: `url(${ShopWomensImage})` }}
				className="w-[50%] h-[700px] bg-top bg-cover flex justify-center items-center brightness-[.85] hover:brightness-100 ease-in duration-200"
			>
				<h2 className="block w-max text-8xl text-white">Shop Women's</h2>
			</Link>
			<Link
				to="/shopping/mens"
				style={{ backgroundImage: `url(${ShopMensImage})` }}
				className="w-[50%] h-[700px] bg-top bg-cover flex justify-center items-center brightness-[.85] hover:brightness-100 ease-in duration-200"
			>
				<h2 className="block w-max text-8xl text-white">Shop Men's</h2>
			</Link>
		</div>
	);
};

export default HomePage;
