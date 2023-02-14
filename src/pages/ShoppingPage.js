import React, { useContext, useState, useEffect } from "react";
import { MdError } from "react-icons/md";
import { useParams } from "react-router-dom";
import { ProductContext } from "../store/ProductContext";
import { UIContext } from "../store/UIContext";
// import { CartContext } from "../store/CartContext";
import ShoppingProductInfo from "../components/ShoppingProductInfo";
import Spinner from "../components/Spinner";

const ShoppingPage = () => {
	const products = useContext(ProductContext);
	const { isLoading, errorMessage } = useContext(UIContext);
	const [chosenCategory, setChosenCategory] = useState("all");
	const { category } = useParams();

	const productsByCategory = products.filter((item) => {
		if (chosenCategory === "womens") {
			return item.category === "women's clothing";
		} else if (chosenCategory === "mens") {
			return item.category === "men's clothing";
		} else {
			return products;
		}
	});

	useEffect(() => {
		if (category) {
			setChosenCategory(category);
		}
	}, [category]);

	return (
		<div className="min-h-screen">
			<select
				name="pickCategory"
				id=""
				onChange={(event) => {
					setChosenCategory(event.target.value);
				}}
				defaultValue={chosenCategory}
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
			{errorMessage && (
				<div className="flex flex-col items-center mt-[200px] lg:mt-[400px]">
					<MdError className="text-amber-300 text-8xl block" />
					<p className="block w-max mx-auto text-3xl mt-[20px]">
						{errorMessage}
					</p>
				</div>
			)}
			{isLoading ? (
				<Spinner />
			) : (
				<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 2xl:gap-8 lg:px-16 my-8 2xl:my-16">
					{productsByCategory.map((item) => {
						return <ShoppingProductInfo key={item.id} product={item} />;
					})}
				</div>
			)}
		</div>
	);
};

export default ShoppingPage;
