import React, { Component } from 'react';
import Header from '../components/Header'
import Intro from '../contents/Intro'
import Coding from '../contents/Coding'
import AboutMe from '../contents/AboutMe'



class Home extends Component {
	render() {
		return (
			<div>
		<Header />
		<Intro />
		<Coding />
		<AboutMe />
		</div>

	)
	}
}
export default Home