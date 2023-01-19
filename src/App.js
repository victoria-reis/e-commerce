import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShoppingPage from "./pages/ShoppingPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";

function App() {
	return (
		<div>
			<h1>My E-Commerce</h1>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/shopping" element={<ShoppingPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
		</div>
	);
}

export default App;
