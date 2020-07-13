import React, { Component } from 'react';
import Header from '../components/Header'
import Intro from '../contents/Intro'
import Coding from '../contents/Coding'
import AboutMe from '../contents/AboutMe'
import Projects from '../contents/Projects'
import Social from '../components/Social'





class Home extends Component {
	render() {
		return (
			<div>
		<Header />
		<Intro />
		<Coding />
		<AboutMe />
		<Projects />
		<Social />
		</div>

	)
	}
}
export default Home