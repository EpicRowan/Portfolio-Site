import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';


class Navitem extends Component {
	render() {
		return (
				<Link to={this.props.tolink} >
				{this.props.item}
				</Link>

			)
	}
}
export default Navitem