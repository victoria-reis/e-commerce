import React, { useEffect, useState, useContext } from "react";
import { UIContext } from "./UIContext";

export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
	const [products, setProducts] = useState([]);
	const { setIsLoading, setErrorMessage } = useContext(UIContext);
	useEffect(() => {
		const fetchProducts = async () => {
			setIsLoading(true);
			const response = await fetch("https://fakestoreapi.com/products");
			if (response.status >= 200 && response.status <= 299) {
				const data = await response.json();
				setProducts(data);
				setIsLoading(false);
			} else {
				setIsLoading(false);
				setErrorMessage(`Error ${response.status}, ${response.statusText}`);
			}
		};
		fetchProducts();
	}, [setErrorMessage, setIsLoading]);

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
