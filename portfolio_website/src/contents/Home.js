import React, { Component } from 'react';
import profilepic from '../img/milo_profile.jpg';
import Social from '../components/Social'

class Home extends Component {
	render() {
		return (
		<div className="condiv home">
		<img src={profilepic} className="profilepic" width="500" height="600"></img>
			<Social />
		</div>
	)
	}
}
export default Home