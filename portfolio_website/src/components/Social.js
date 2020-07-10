import React, { Component } from 'react';

class Social extends Component {
	render() {
		return (
			<footer>
			<li className="social_list_item">
				<a className="social_link" 
					href="https://github.com/EpicRowan">
					Github
					<i class="fab fa-github"></i>
				</a>
				<a href="https://Linkedin.com/in/rowan-shepherd/" target="_blank">Linkedin<i class="fab fa-linkedin-in"></i></a>
			</li>
			</footer>
			)
	}
}
export default Social