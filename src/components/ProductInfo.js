import React from "react";

const ProductInfo = (props) => {
	return (
		<div>
			<div>
				<img src={props.image} alt="" />
			</div>
			<p>{props.title}</p>
			<p>$ {parseFloat(props.price).toFixed(2)}</p>
		</div>
	);
};

export default ProductInfo;
