import React, { Component } from 'react';
import profilepic from '../img/milo_profile.jpg';
import Services from '../components/Services'

class Home extends Component {
	render() {
		return (

		<div className="home">
					<h1> Hi, I am Bob </h1>
		<img src={profilepic} className="profilepic"></img>
		<Services />
		</div>

	)
	}
}
export default Home