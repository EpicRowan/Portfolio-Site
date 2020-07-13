import React, { Component } from 'react';
import doompic from '../img/doom.gif';
import Header from '../components/Header'
import FontAwesome from 'react-fontawesome'


class ProjectInfo extends Component {
	render() {
		return (
				<div>
				<Header />
				<div className="aboutme" >
				<h2 className="aboutme_title">
					Doom Mapper
				</h2>
				<div className="info_list" >
				<a className="info_link" 
					href="https://github.com/EpicRowan/Doom_mapper">
					<FontAwesome className="fab fa-github"/>
				</a>
				<a className="info_link" 
					href="https://github.com/EpicRowan/Doom_mapper">
					<FontAwesome className="fa fa-video-camera"/>
				</a>
				</div>
				<div className="section__subtitle__aboutme"> 
						Python, Javascript
				</div>
				<div className="aboutme_body">
				<p>
				What is <b>Lorem Ipsum</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?
				</p>
				<img src={doompic} className="about_me_pic" alt=""></img>



			</div>
			</div>
	</div>
		)
	}
}
export default ProjectInfo