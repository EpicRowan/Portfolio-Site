import React, { Component } from 'react';
import profilepic from '../img/milo_profile.jpg';
import About from '../contents/About'
import Intro from '../contents/Intro'
import Header from '../components/Header'

class Home extends Component {
	render() {
		return (

		<div className="home">
		<Header />
			<h1> Hi, I am Bob </h1>
			<Intro />
		<img src={profilepic} className="profilepic"></img>
		<About />
		</div>

	)
	}
}
export default Home