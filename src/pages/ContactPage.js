import React, { useState } from "react";

const ContactPage = () => {
	const [emailSubmitted, setEmailSubmitted] = useState(false);

	const submitHandler = (event) => {
		event.preventDefault();
		setEmailSubmitted(!emailSubmitted);
	};

	return (
		<div className="min-h-[90vh]">
			<h2 className="text-center text-3xl font-bold mt-6 sm:mt-14">
				Contact Us
			</h2>
			{emailSubmitted ? (
				<p className="block w-max mx-auto text-xl mt-[200px]">
					Thank you for your message!
				</p>
			) : (
				<form
					action=""
					className="flex flex-col w-[95%] sm:w-8/12 mx-auto mt-6 md:w-[50%] lg:w-[40%]"
				>
					<p className="my-6 text-center">
						If you have any questions or need help, please fill out the form
						below. We do our best to respond within 1 business day.
					</p>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						className="w-[100%] mb-4 rounded-md p-1"
						placeholder="Your name"
					/>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						className="w-[100%] mb-4 rounded-md p-1"
						placeholder="Your email"
					/>
					<label htmlFor="subject">Subject:</label>
					<input
						type="text"
						id="subject"
						className="w-[100%] mb-4 rounded-md p-1"
						placeholder="Subject"
					/>
					<label htmlFor="message">Message</label>
					<textarea
						placeholder="Your message"
						className="h-[200px] rounded-md p-1"
					/>
					<button
						onClick={(event) => {
							submitHandler(event);
						}}
						className="block w-max mx-auto mt-10 bg-amber-300 px-6 py-2 rounded-full text-xl hover:scale-105 ease-in duration-200"
					>
						Submit
					</button>
				</form>
			)}
		</div>
	);
};

export default ContactPage;
