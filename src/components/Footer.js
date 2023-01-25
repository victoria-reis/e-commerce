import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookSquare, FaTiktok } from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<section className="flex h-[250px] justify-between mt-10">
				<div className="w-1/4">
					<h3 className="font-semibold">Customer Support</h3>
					<ul className="flex flex-col leading-10">
						<li>
							<Link>Contact Us</Link>
						</li>
						<li>FAQ</li>
						<li>Size Charts</li>
						<li>Account</li>
					</ul>
				</div>
				<div className="flex flex-col w-1/4">
					<h3 className="font-semibold">Orders & Returns</h3>
					<ul className="flex flex-col leading-10">
						<li>Shipping Methods</li>
						<li>Returns & Exchanges</li>
						<li>Track Package</li>
						<li>Order Status</li>
					</ul>
				</div>
				<div className="flex flex-col w-1/6">
					<h3 className="font-semibold">Company Info</h3>
					<ul className="flex flex-col leading-10">
						<li>About Us</li>
						<li>Careers</li>
					</ul>
				</div>
				<div className="xl:w-1/6 w-1/4">
					<h4 className="font-semibold">Follow Us:</h4>
					<ul className="flex mt-9 justify-between">
						<li className="text-5xl">
							<FaInstagram />
						</li>
						<li className="text-5xl">
							<FaFacebookSquare />
						</li>
						<li className="text-5xl">
							<FaTiktok />
						</li>
					</ul>
				</div>
			</section>
			<p className="text-center py-2">Created by Victoria Reis</p>
		</>
	);
};

export default Footer;
