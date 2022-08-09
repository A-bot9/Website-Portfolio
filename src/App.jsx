import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
	// function handleResume() {
	// 	window.open('example.com/path/to/resume.pdf', '_blank');
	// }
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Experience />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
