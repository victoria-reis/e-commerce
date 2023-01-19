import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<h1>My E-Commerce</h1>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/shopping">Shop</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/cart">🛒</Link>
			</nav>
		</div>
	);
};

export default Header;
