import React, { Component } from 'react';
import computerpic from '../img/computer.jpeg';


class About extends Component {
	render() {
		return (
		<div className="about">
			<h2 className="about_title">
				About me
			</h2>

			<p className="about_section">
			<h3> Title 1</h3>
				What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
			
			<h3> Title 2</h3>
				This too
			
			<h3> Title 3</h3>
				Also this
			</p>
			<button className="btn"> My Projects</button>
		</div>
		)
	}
}
export default About