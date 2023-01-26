import React from "react";

const ContactPage = () => {
	return (
		<div className="min-h-[90vh]">
			<h2 className="text-center text-3xl font-bold mt-14">Contact Us</h2>
			<form action="" className="flex flex-col w-8/12 mx-auto mt-16">
				<p>
					If you have any questions or need help, please fill out the form
					below. We do our best to respond within 1 business day.
				</p>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					className="w-min"
					placeholder="Your name"
				/>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					className="w-min"
					placeholder="Your email"
				/>
				<label htmlFor="subject">Subject:</label>
				<input
					type="text"
					id="subject"
					className="w-min"
					placeholder="Subject"
				/>
				<label htmlFor="message">Message</label>
				<textarea placeholder="Your message" />
			</form>
		</div>
	);
};

export default ContactPage;
