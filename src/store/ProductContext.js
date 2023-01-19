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

	return (
		<ProductContext.Provider value={products}>
			{props.children}
		</ProductContext.Provider>
	);
};
