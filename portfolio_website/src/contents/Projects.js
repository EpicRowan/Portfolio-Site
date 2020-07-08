import React, { Component } from 'react';
import doomproject from '../img/doom.gif'


class Projects extends Component {
	render() {
		return (
			<div className="portfolio">
			<h2> My Work </h2>
			<h3> A Collection of my Coding Projects </h3>


				<a href="" className="portfolio_item"></a>
					<img src={doomproject} className="portfolio_img" alt=""></img>

			</div>
		)
	}
}
export default Projects