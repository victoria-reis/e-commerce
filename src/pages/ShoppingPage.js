import React, { useContext } from "react";
import { ProductContext } from "../store/ProductContext";
import { CartContext } from "../store/CartContext";
import ProductInfo from "../components/ProductInfo";

const ShoppingPage = () => {
	const products = useContext(ProductContext);
	const { cartState } = useContext(CartContext);

	console.log(cartState.items);
	return (
		<>
			<div>
				<h2>Our products</h2>
			</div>
			<div>
				{products.map((item) => {
					return <ProductInfo key={item.id} product={item} />;
				})}
			</div>
		</>
	);
};

export default ShoppingPage;
