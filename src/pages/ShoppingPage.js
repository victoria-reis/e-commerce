import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../store/ProductContext";
import { CartContext } from "../store/CartContext";
import ProductInfo from "../components/ProductInfo";

const ShoppingPage = () => {
	const products = useContext(ProductContext);
	// const { cartState } = useContext(CartContext);

	const { category } = useParams();

	const productsByCategory = products.filter((item) => {
		if (category === "all") {
			return products;
		} else if (category === "womens") {
			return item.category === "women's clothing";
		} else {
			return item.category === "men's clothing";
		}
	});

	console.log(productsByCategory);

	return (
		<>
			<div>
				<h2>Our products</h2>
			</div>
			<div>
				{productsByCategory.map((item) => {
					return <ProductInfo key={item.id} product={item} />;
				})}
			</div>
		</>
	);
};

export default ShoppingPage;
