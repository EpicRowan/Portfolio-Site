import React, { Component } from 'react';
import profilepic from '../img/milo_profile.jpg';

class Intro extends Component {
	render() {
		return (
			
			<div className="home">
				<h1>
					<regular> 
					Hi, I am 
					</regular>
					<br />
					Rowan Shepherd
				</h1>
				<img src={profilepic} className="profilepic" alt=""></img>
				<p className="section__subtitle"> 
					<center>
					<br />
						Full stack Web Developer
					</center>
				</p>
				
			</div>
		)
	}
}
export default Intro