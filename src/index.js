import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./store/ProductContext";
import { CartProvider } from "./store/CartContext";
import { UIProvider } from "./store/UIContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<UIProvider>
			<ProductProvider>
				<CartProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</CartProvider>
			</ProductProvider>
		</UIProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
