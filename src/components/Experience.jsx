import React from 'react';

const Experience = () => {
	return (
		<section name="experience" className="text-gray-400 bg-gray-900 body-font">
			<div className="container px-5 py-24 md:py-48 mx-auto">
				<div className="-my-8 divide-y-2 divide-gray-800 ">
					<h1 className="inline-block text-4xl pl-5 text-slate-300 font-bold pb-3 underline decoration-slate-600 transition hover:text-[#00df9a] cursor-pointer">
						Where I've Worked
					</h1>

					{/* First Job */}
					<div className="py-8 flex flex-wrap md:flex-nowrap">
						<div className="md:w-64 md:mb-0 mb-4 flex-shrink-0 flex flex-col">
							<span className="font-semibold title-font text-white">PSJA ISD</span>
							<span className="text-gray-500 text-sm">November 2021 - Current</span>
						</div>
						<div className="md:flex-grow">
							<h2 className="text-2xl font-medium text-white title-font ">Substitute Teacher</h2>
							<p className="leading-relaxed triangleList pl-2 md:pl-0">
								Keep students on-task with proactive behavior modification and positive
								reinforcement strategies.
							</p>
							<p className="leading-relaxed triangleList pl-2 md:pl-0">
								Follow classroom plans left by class teacher to continue student education and
								reinforce core concepts.
							</p>
						</div>
					</div>

					{/* Second Job */}
					<div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
						<div className="md:w-64 md:mb-0 mb-4 flex-shrink-0 flex flex-col">
							<span className="font-semibold title-font text-white">HM3</span>
							<span className="text-gray-500 text-sm">September 2018 - November 2018</span>
						</div>
						<div className="md:flex-grow ">
							<h2 className="text-2xl font-medium text-white title-font">Engineer Intern</h2>
							<p className="leading-relaxed triangleList pl-2 md:pl-0">
								Created designs and blueprints using AutoCAD according to customer specifications,
								timelines, and supply inventories.
							</p>
						</div>
					</div>

					{/* Third Job */}
					<div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
						<div className="md:w-64 md:mb-0 mb-4 flex-shrink-0 flex flex-col">
							<span className="font-semibold title-font text-white">Azure Bistro</span>
							<span className="text-gray-500 text-sm">April 2017 - April 2018</span>
						</div>
						<div className="md:flex-grow ">
							<h2 className="text-2xl font-medium text-white title-font">Server</h2>
							<p className="leading-relaxed triangleList pl-2 md:pl-0">
								Experience providing excellent customer service in a fast-paced environment.
							</p>
							<p className="leading-relaxed triangleList pl-2 md:pl-0">
								Able to perform high-quality work while unsupervised.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
