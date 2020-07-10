import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'


class Social extends Component {
	render() {
		return (
			<footer>
			<div className="footer" id="contact">
			<a href="mailto:shepherd.rowan.k@gmail.com" className="social_link">
				shepherd.rowan.k@gmail.com </a>

			<li className="social_list">
				<a className="social_link" 
					href="https://github.com/EpicRowan">
					<FontAwesome className="fab fa-github"/>
				</a>
			
			
				<a className="social_link" 
					href="https://linkedin.com/in/rowan-shepherd/">
					<FontAwesome className="fab fa-linkedin"/>
				</a>
			</li>
			</div>
			</footer>
			)
	}
}
export default Social