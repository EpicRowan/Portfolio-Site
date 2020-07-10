import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'


class Social extends Component {
	render() {
		return (
			<footer>
			<li className="social_list_item">
				<a className="social_link" 
					href="https://github.com/EpicRowan">
					<FontAwesome className="fab fa-github"/>
				</a>
				<a className="social_link" 
					href="https://linkedin.com/in/rowan-shepherd/">
					<FontAwesome className="fab fa-linkedin"/>
				</a>
			</li>
			</footer>
			)
	}
}
export default Social