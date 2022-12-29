import React, {Component} from "react";
import "../../styles/style.scss";
import {Link} from "react-scroll";


export default class NavBar extends Component{
	render(){
		return(
			<nav className = ".mask-hero">
				
			{/*<button type = "button" data-toggle= "collapse" data-target = "#navbarNavMenu" aria-controls="navbarNavMenu"
			aria-expanded="false"
			aria-label="Toggle navigation">
		<i className = "fas fa-bars fa-lg"></i>*/}
			
			<div className = "mask-row" id = "navbarNavMenu" >
		
				<button className = {style.mask-button}>
					<Link to = "about"
					className = "nav-link"
					activeClass="active"
					spy={true}
					smooth={true}>About</Link>
				</button>
				<button className = ".mask-button">
					<Link to = "my-projects"
					className = "nav-link"
					activeClass="active"
					spy={true}
					smooth={true}>Projects</Link>
				</button>
				<button className = ".mask-button">
					<Link to = "resume"
					className = "nav-link"
					activeClass="active"
					spy={true}
					smooth={true}>Resume</Link>
				</button>
				<button className = ".mask-button">
					<Link to = "my-contact"
					className = "nav-link"
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