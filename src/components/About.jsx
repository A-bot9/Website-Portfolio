import React from 'react';
import codePic from '../assets/codePic.jpg';

const About = () => {
	return (
		<section name="about" className="text-gray-400">
			<div className="container mx-auto flex px-5 py-24  md:py-48 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start text-center ">
					<h1 className=" sm:text-4xl text-4xl mb-4 pl-5 pb-3 text-slate-300 font-bold underline decoration-slate-600 transition hover:text-[#00df9a] cursor-pointer">
						About Me
					</h1>
					<p className="mb-8 leading-relaxed text-left ">
						Hello! my name is Adrian, and I like bringing things to life. When I graduated from
						college, I was having trouble figuring out what I wanted to do with my life. I
						received my Bachelor's degree only two years after graduating from high school. My
						interest in becoming a Frontend Engineer started on January 6, 2022.
					</p>
					<p className="mb-8 leading-relaxed text-slate-300 text-left ">
						Fast forward to June 18, 2022 I have been consisted on learning how to code and I am
						currently a student at Nucamp Coding Bootcamp. July 4th-November 26th.
					</p>
					<p className="leading-relaxed text-left ">
						Here are a few technolgies I've been working on with recently:
					</p>
					<ul className="uLstyle inline-block text-left">
						<li className="triangleList">JavaScript (ES6)</li>
						<li className="triangleList">React</li>
						<li className="triangleList">TailWind CSS</li>
					</ul>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						className="object-cover object-center rounded border border-[#00df9a] "
						alt="hero"
						src={codePic}
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
