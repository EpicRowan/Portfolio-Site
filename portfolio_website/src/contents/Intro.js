import React, { Component } from 'react';
import profilepic from '../img/milo_profile.jpg';

class Intro extends Component {
	render() {
		return (
			
			<div className="home">
				<h1> 
					Hi, I am Bob 
				</h1>
				<p className="section__subtitle"> 
					front-end dev 
				</p>
				<img src={profilepic} className="profilepic"></img>
				
			</div>
		)
	}
}
export default Intro