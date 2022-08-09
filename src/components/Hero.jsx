import React from 'react';
import Typed from 'react-typed';
import Resume from '../assets/Resume.pdf';
import { FaLinkedinIn, FaCodepen, FaGithub } from 'react-icons/fa';

const Hero = () => {
	return (
		<div className="text-white grid grid-cols-1 h-screen">
			<div className="container px-5 pt-40 mx-auto text-center md:text-left flex flex-col">
				<p className="text-[#00df9a] text-lg pb-4 pl-2">Hi, my name is</p>

				<h1 className="md:text-7xl text-4xl font-bold md:py-6 text-slate-300">
					Adrian Leal.
				</h1>
				<div className="text-center md:text-left">
					<p className="md:text-6xl lg:text-5xl text-xl font-bold py-4 text-slate-600">
						I
						<Typed
							className="md:text-6xl lg:text-5xl text-xl font-bold md:pl-4 pl-2 "
							strings={['code', 'build']}
							typeSpeed={120}
							backSpeed={140}
							loop
						/>
						things into reality.
					</p>
				</div>
				<div className="flex justify-center md:justify-start">
					<button className="text-emerald-400 bg-slate-800 self-center md:self-start lg:self-start rounded border-2 border-emerald-400 py-2 px-6 hover:bg-emerald-900 w-[100px] font-medium mt-6">
						<a href={Resume} target="_blank" rel="noreferrer">
							Resume
						</a>
					</button>

					<ul className="flex justify-center self-center mt-6">
						<li className="p-1 px-4 coolLists">
							<a href="https://www.linkedin.com/in/adrian9leal/" target="_blank">
								<FaLinkedinIn size={25} />
							</a>
						</li>
						<li className="p-1 px-4 coolLists">
							<a href="https://codepen.io/a-bot9" target="_blank">
								<FaCodepen size={25} />
							</a>
						</li>
						<li className="p-1 px-4 coolLists">
							<a href="https://github.com/A-bot9" target="_blank">
								<FaGithub size={25} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Hero;
