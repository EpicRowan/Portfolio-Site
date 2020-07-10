import React, { Component } from 'react';
import Header from '../components/Header'
import Intro from '../contents/Intro'
import Coding from '../contents/Coding'
import AboutMe from '../contents/AboutMe'
import Projects from '../contents/Projects'
import Social from '../components/Social'
import FontAwesome from 'react-fontawesome'
import { HashLink as Link } from 'react-router-hash-link';




class Home extends Component {
	render() {
		return (
			<div>
		<Link to="#coding">Question 1</Link>
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