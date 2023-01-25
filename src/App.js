import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShoppingPage from "./pages/ShoppingPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="container mx-auto bg-gray-100 px-10 pt-2">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/shopping/:category?" element={<ShoppingPage />} />
				<Route path="/productDetails/:id" element={<ProductDetailsPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="*" element={<p>404, page not found!</p>} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
