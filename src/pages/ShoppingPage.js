import React, { useContext } from "react";
import { ProductContext } from "../store/ProductContext";
import ProductInfo from "../components/ProductInfo";

const ShoppingPage = () => {
	const products = useContext(ProductContext);
	console.log(products);
	return (
		<>
			<div>
				<h2>Our products</h2>
			</div>
			<div>
				{products.map((item) => {
					return (
						<ProductInfo
							key={item.id}
							title={item.title}
							price={item.price}
							image={item.image}
							id={item.id}
						/>
					);
				})}
			</div>
		</>
	);
};

export default ShoppingPage;
