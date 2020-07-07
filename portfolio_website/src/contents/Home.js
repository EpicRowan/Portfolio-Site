import React, { Component } from 'react';
import About from '../contents/About'
import Intro from '../contents/Intro'
import Header from '../components/Header'

class Home extends Component {
	render() {
		return (
			<div>
		<Header />
		<Intro />
		<About />
		</div>

	)
	}
}
export default Home