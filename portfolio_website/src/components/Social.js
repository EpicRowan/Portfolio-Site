import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'


class Social extends Component {
	render() {
		return (
			<footer>
			<li className="social_list_item">
				<a className="social_link" 
					href="https://github.com/EpicRowan">
					Github
					<FontAwesome className="fab fa-github"/>
				</a>
				<a href="https://Linkedin.com/in/rowan-shepherd/" target="_blank">Linkedin<i className="fab fa-linkedin-in"></i></a>
			</li>
			</footer>
			)
	}
}
export default Social