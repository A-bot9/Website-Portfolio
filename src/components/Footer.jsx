import React from 'react';
import AL from '../images/LOGO.png';
import { FaLinkedinIn, FaCodepen, FaGithub } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className="flex justify-between items-center h-24 max-w mx-auto px-4 text-slate-400">
			<img
				className="w-full text-3xl font-bold text-[#00df9a] m-4 w-10 h-10 border-2 border-emerald-400 rounded-full"
				src={AL}
			/>
			<ul className="flex justify-center">
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
				<li className="p-1 px-4 sm:mr-12 md:mr-12 coolLists">
					<a href="https://github.com/A-bot9" target="_blank">
						<FaGithub size={25} />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
