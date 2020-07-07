import React, { Component } from 'react';
import profilepic from '../img/milo_profile.jpg';
import About from '../contents/About'
import Intro from '../contents/Intro'
import Header from '../components/Header'
import Name from '../contents/Name'

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