import React, {Component} from "react";
import "../../styles/style.scss";
import {Link} from "react-scroll";


export default class NavBar extends Component{
	render(){
		return(
			<nav className = "mask-hero">
				
			{/*<button type = "button" data-toggle= "collapse" data-target = "#navbarNavMenu" aria-controls="navbarNavMenu"
			aria-expanded="false"
			aria-label="Toggle navigation">
		<i className = "fas fa-bars fa-lg"></i>*/}
			
			<div className = "mask-hero" id = "navbarNavMenu" >
		
				<button className = "button">
					<Link to = "about"
					className = "h2"
					activeClass="active"
					spy={true}
					smooth={true}>About</Link>
				</button>
				<button className = "button">
					<Link to = "my-samples"
					className = "h2"
					activeClass="active"
					spy={true}
					smooth={true}>Samples</Link>
				</button>
				<button className = "button">
					<Link to = "information"
					className = "h2"
					activeClass="active"
					spy={true}
					smooth={true}>Information</Link>
				</button>
				<button className = "mask-button">
					<Link to = "my-contact"
					className = "h2"
					activeClass="active"
					spy={true}
					smooth={true}>Contact</Link>
				</button>
			</div>
			{/*</button>*/}
			</nav>
		);
	}
}