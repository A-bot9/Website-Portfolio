import React from 'react';

const Projects = () => {
	return (
		<div name="projects" className="container px-5 py-24  md:py-48 mx-auto">
			<h1 className="inline-block text-4xl pl-5 text-slate-300 font-bold pb-3 underline decoration-slate-600 transition hover:text-[#00df9a] cursor-pointer">
				Projects
			</h1>
			<div className="flex flex-wrap -m-4">
				{/* 1st Project Card */}
				<div className="p-4 lg:w-1/3 transform transition duration-500 hover:scale-105">
					<div className="h-full bg-slate-600 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative border border-slate-300">
						<h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
							project #1
						</h2>
						<h1 className="title-font sm:text-2xl text-xl font-medium text-gray-200 mb-3">
							Random Quote Generator
						</h1>
						<p className="leading-relaxed mb-3 text-gray-400">
							Simple application that renders random quotes from Type.Fit API. Used React, and
							Bootstrap
						</p>
						<a
							href="https://codepen.io/a-bot9/pen/vYdRgMP"
							target="_blank"
							className="text-emerald-400 inline-flex items-center cursor-pointer"
						>
							Go to project
							<svg
								className="w-4 h-4 ml-2"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M5 12h14"></path>
								<path d="M12 5l7 7-7 7"></path>
							</svg>
						</a>
					</div>
				</div>

				{/* 2nd Project Card */}
				<div className="p-4 lg:w-1/3 transform transition duration-500 hover:scale-105">
					<div className="h-full bg-slate-600 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative border border-slate-300">
						<h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
							project #2
						</h2>
						<h1 className="title-font sm:text-2xl text-xl font-medium text-gray-200 mb-3">
							Markdown Previewer
						</h1>
						<p className="leading-relaxed mb-3 text-gray-400">
							lightweight markup language with plain text formatting syntax using the marked npm.
							Used React and Bootstrap.
						</p>
						<a
							href="https://codepen.io/a-bot9/pen/qBxybpo"
							target="_blank"
							className="text-emerald-400 inline-flex items-center cursor-pointer"
						>
							Go to project
							<svg
								className="w-4 h-4 ml-2"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M5 12h14"></path>
								<path d="M12 5l7 7-7 7"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;

{
	/* 3rd Project Card */
}
{
	/* <div className="p-4 lg:w-1/3">
						<div className="h-full bg-slate-600 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
							<h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
								CATEGORY
							</h2>
							<h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
								Selvage Poke Waistcoat Godard
							</h1>
							<p className="leading-relaxed mb-3">
								Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing
								tousled waistcoat.
							</p>
							<a className="text-emerald-400 inline-flex items-center">
								Learn More
								<svg
									className="w-4 h-4 ml-2"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M5 12h14"></path>
									<path d="M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
					</div> */
}
