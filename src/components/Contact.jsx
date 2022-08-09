import React from 'react';

const Contact = () => {
	return (
		<div
			name="contact"
			className="container px-5 py-24 mx-auto bg-[#111827] flex justify-center md:justify-center items-center p-4"
		>
			<form
				method="POST"
				action="https://getform.io/f/2caf33d7-1d06-4c5b-9111-0fdcbaa50292"
				className="flex flex-col max-w-[600px] w-full"
			>
				<h1 className="inline-block text-4xl pl-5 text-slate-300 font-bold pb-3 underline decoration-slate-600 transition hover:text-[#00df9a] cursor-pointer">
					Contact Me
				</h1>
				<div>
					<p className="py-4 text-gray-400">Submit the form below to shoot me an email...</p>
				</div>
				<input
					className=" bg-slate-600 text-emerald-400 p-2 rounded border border-slate-300"
					type="text"
					placeholder="Name"
					name="name"
				/>
				<input
					className="my-4 p-2 bg-slate-600 text-emerald-400 rounded border border-slate-300"
					type="email"
					placeholder="Email"
					name="email"
				/>
				<textarea
					className="p-2 bg-slate-600 text-emerald-400 rounded border border-slate-300"
					name="message"
					rows="10"
					placeholder="Message"
				></textarea>
				<button className="text-emerald-400 bg-slate-800 rounded border-2 border-emerald-400 py-2 px-4 my-8 hover:bg-emerald-900 font-medium mx-auto">
					Say Hello
				</button>
			</form>
		</div>
	);
};

export default Contact;
