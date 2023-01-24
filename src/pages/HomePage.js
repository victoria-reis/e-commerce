import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div>
			<p>Home Page!</p>
			<Link to="/shopping">Shop All</Link>
			<Link to="/shopping/womens">Shop Women's</Link>
			<Link to="/shopping/mens">Shop Men's</Link>
		</div>
	);
};

export default HomePage;
