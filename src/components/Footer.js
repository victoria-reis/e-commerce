import React from "react";
import { Link } from "react-router-dom";
import {
	FaInstagram,
	FaFacebookSquare,
	FaTiktok,
	FaHeart,
} from "react-icons/fa";

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
						<li>
							<a href="/">FAQ</a>
						</li>
						<li>
							<a href="/">Size Charts</a>
						</li>
						<li>
							<a href="/">Account</a>
						</li>
					</ul>
				</div>
				<div className="flex flex-col w-1/4">
					<h3 className="font-semibold">Orders & Returns</h3>
					<ul className="flex flex-col leading-10">
						<li>
							<a href="/">Shipping Methods</a>
						</li>
						<li>
							<a href="/">Returns & Exchanges</a>
						</li>
						<li>
							<a href="/">Track Package</a>
						</li>
						<li>
							<a href="/">Order Status</a>
						</li>
					</ul>
				</div>
				<div className="flex flex-col w-1/6">
					<h3 className="font-semibold">Company Info</h3>
					<ul className="flex flex-col leading-10">
						<li>
							<a href="/">About Us</a>
						</li>
						<li>
							<a href="/">Careers</a>
						</li>
					</ul>
				</div>
				<div className="xl:w-1/6 w-1/4">
					<h4 className="font-semibold">Follow Us:</h4>
					<ul className="flex mt-9 justify-between">
						<li className="text-5xl">
							<a href="https://www.instagram.com/">
								<FaInstagram />
							</a>
						</li>
						<li className="text-5xl">
							<a href="https://www.facebook.com/">
								<FaFacebookSquare />
							</a>
						</li>
						<li className="text-5xl">
							<a href="https://www.tiktok.com/">
								<FaTiktok />
							</a>
						</li>
					</ul>
				</div>
			</section>
			<p className="text-center py-2">
				Created by{" "}
				<a href="https://www.linkedin.com/in/-victoriareis/">Victoria Reis</a>{" "}
				with <FaHeart className="inline text-sm text-red-600 -mt-1" />
			</p>
		</>
	);
};

export default Footer;
