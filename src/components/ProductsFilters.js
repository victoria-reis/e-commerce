const ProductsFilters = (productsArray, category, priceSorting) => {
	const filteredByCategory = productsArray.filter((item) => {
		if (category === "womens") {
			return item.category === "women's clothing";
		} else if (category === "mens") {
			return item.category === "men's clothing";
		} else {
			return productsArray;
		}
	});

	const filteredByPrice = filteredByCategory.sort((a, b) => {
		if (priceSorting === "lowToHigh") {
			return a.price > b.price ? 1 : -1;
		} else if (priceSorting === "highToLow") {
			return a.price < b.price ? 1 : -1;
		} else {
			return filteredByCategory;
		}
	});

	return filteredByPrice;
};

export default ProductsFilters;
