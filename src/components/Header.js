import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../store/CartContext";

const Header = () => {
	const { cartState } = useContext(CartContext);
	return (
		<div className="header">
			<h1>My E-Commerce</h1>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/shopping">Shop</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/cart">🛒</Link>
				<p>{cartState.totalAmount}</p>
			</nav>
		</div>
	);
};

export default Header;
