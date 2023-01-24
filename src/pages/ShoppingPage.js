import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../store/ProductContext";
// import { CartContext } from "../store/CartContext";
import ShoppingProductInfo from "../components/ShoppingProductInfo";

const ShoppingPage = () => {
	const products = useContext(ProductContext);
	const [chosenCategory, setChosenCategory] = useState("");
	// const { cartState } = useContext(CartContext);

	const { category } = useParams();

	const productsByCategory = products.filter((item) => {
		if (category || chosenCategory === "womens") {
			return item.category === "women's clothing";
		} else if (category || chosenCategory === "mens") {
			return item.category === "men's clothing";
		} else {
			return products;
		}
	});

	// console.log(productsByCategory);

	return (
		<>
			<div>
				<h2>Our products</h2>
			</div>
			<select
				name="pickCategory"
				id=""
				onChange={(event) => {
					setChosenCategory(event.target.value);
				}}
			>
				<option value="all">All</option>
				<option value="womens">Women's</option>
				<option value="mens">Men's</option>
			</select>
			<select
				name="sortByPrice"
				id=""
				defaultValue={undefined}
				onChange={() => {}}
			>
				<option value={undefined}>Sort</option>
				<option value="lowToHigh">Price low to high</option>
				<option value="highToLow">Price high to low</option>
			</select>
			<div>
				{productsByCategory.map((item) => {
					return <ShoppingProductInfo key={item.id} product={item} />;
				})}
			</div>
		</>
	);
};

export default ShoppingPage;
