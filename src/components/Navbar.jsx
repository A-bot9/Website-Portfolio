import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import AL from '../images/LOGO.png';
import { Link } from 'react-scroll';
import Resume from '../assets/Resume.pdf';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => {
		setNav(!nav);
	};

	return (
		<div className="flex justify-between items-center h-24 max-w mx-auto px-4 text-slate-400">
			<img
				className="w-full text-3xl font-bold text-[#00df9a] m-4 w-10 h-10 border-2 border-emerald-400 rounded-full"
				src={AL}
			/>
			<ul className="hidden md:flex ">
				<li className="p-1 px-4 coolLists">
					<Link to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="p-1 px-4 coolLists">
					<Link to="experience" smooth={true} duration={500}>
						Experience
					</Link>
				</li>
				<li className="p-1 px-4 coolLists">
					<Link to="projects" smooth={true} duration={500}>
						Projects
					</Link>
				</li>
				<li className="p-1 px-4 coolLists">
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
				<button className="px-2 mr-12 rounded border-2 bg-slate-800 border-emerald-400 hover:bg-emerald-900  text-emerald-400">
					<a href={Resume} target="_blank" rel="noreferrer">
						Resume
					</a>
				</button>
			</ul>

			{/* Mobile Menu */}
			<div onClick={handleClick} className="block md:hidden ">
				{nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
			</div>
			<ul
				className={
					nav
						? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-slate-800 ease-in-out duration-500 md:hidden z-10'
						: 'ease-in-out duration-500 fixed left-[-100%] md:hidden '
				}
			>
				<img
					className="w-full text-3xl font-bold text-[#00df9a] m-4 w-10 h-10 border-2 border-emerald-400 rounded-full"
					src={AL}
				/>

				<li className="p-4 border-b border-slate-600 coolLists">
					<Link onClick={handleClick} to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="p-4 border-b border-slate-600 coolLists">
					<Link onClick={handleClick} to="experience" smooth={true} duration={500}>
						Experience
					</Link>
				</li>
				<li className="p-4 border-b border-slate-600 coolLists">
					<Link onClick={handleClick} to="projects" smooth={true} duration={500}>
						Projects
					</Link>
				</li>
				<li className="p-4 border-b border-slate-600 coolLists">
					<Link onClick={handleClick} to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
				<button className="p-2 mt-4 ml-3 rounded border-2 border-emerald-400 hover:bg-emerald-900  text-emerald-400 px-2;">
					<a href={Resume} target="_blank" rel="noreferrer">
						Resume
					</a>
				</button>
			</ul>
		</div>
	);
};

export default Navbar;
