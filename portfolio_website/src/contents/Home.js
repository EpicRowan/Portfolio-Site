import React, { Component } from 'react';
import Header from '../components/Header'
import Intro from '../contents/Intro'
import About from '../contents/About'
import Skills from '../contents/Skills'



class Home extends Component {
	render() {
		return (
			<div>
		<Header />
		<Intro />
		<About />
		<Skills />
		</div>

	)
	}
}
export default Home