import React, { Component } from 'react';
import doomproject from '../img/doom.gif'


class Projects extends Component {
	render() {
		return (
			<section className="my_work" id="projects">
			<h2 className="portfolio_title"> My Work </h2>

			<div className="portfolio">
				<a href="/projectinfo" className="portfolio_item">
					<img src={doomproject} className="portfolio_img" alt=""></img>
				</a>
			</div>
			</section>
		)
	}
}
export default Projects