import React, { Component } from 'react';
import about_me_pic from '../img/download.png'

class AboutMe extends Component {
	render() {
		return (
			
			<div className="aboutme" id="about">
				<h2 className="aboutme_title">
					Who I am
				</h2>
				<div className="section__subtitle__aboutme"> 
					Devloper based in San Francisco				
				</div>
				<div className="aboutme_body">
				<p>
				What is <b>Lorem Ipsum</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
				</p>
				<p>
				What is <b>Lorem Ipsum</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
				</p>
				<p>
				What is <b>Lorem Ipsum</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
				</p>
				</div>

				<img src={about_me_pic} className="about_me_pic" alt=""></img>

				
				
			</div>
		)
	}
}
export default AboutMe