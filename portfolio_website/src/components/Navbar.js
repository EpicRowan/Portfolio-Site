import React, { Component } from 'react';
import Navitem from './Navitem';
import FontAwesome from 'react-fontawesome'


class Navbar extends Component {
	constructor(props) {
	super(props);
	this.state={
		'NavItemActive':''
		}
	}
activeitem=(x)=> {
	if(this.state.NavItemActive.length>0){
		document.getElementById(this.state.NavItemActive).classList.remove('active');
	}
	this.setState({'NavItemId':x},()=>{
		document.getElementById(this.state.NavItemActive).classList.add('active');
	});
};
	render() {
		return (
			<div className="dropdown">
  			<button className="dropbtn">
  				<FontAwesome className="fas fa-bars"/>
  			</button>
  				<div className="dropdown-content">
				<Navitem item="Home" tolink="/"  activec={this.activeitem}></Navitem>
				<Navitem item="Coding" tolink="/coding"  activec={this.activeitem}></Navitem>
				<Navitem item="About Me" tolink="/about"  activec={this.activeitem}></Navitem>
				<Navitem item="Projects" tolink="/projects"  activec={this.activeitem}></Navitem>
				<Navitem item="Contact" tolink="/contact"  activec={this.activeitem}></Navitem>

  </div>
</div>

			)
	}
}
export default Navbar