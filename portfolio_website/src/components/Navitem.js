import React, { Component } from 'react';
import { Link } from "react-router-dom";

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