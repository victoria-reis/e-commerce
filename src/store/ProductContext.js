import React, { useEffect, useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch("https://fakestoreapi.com/products");
			const data = await response.json();
			setProducts(data);
		};
		fetchProducts();
	}, []);

	const filteredProducts = products.filter((item) => {
		return (
			item.category === "men's clothing" || item.category === "women's clothing"
		);
	});

	return (
		<ProductContext.Provider value={filteredProducts}>
			{props.children}
		</ProductContext.Provider>
	);
};
