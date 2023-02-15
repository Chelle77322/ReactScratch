import React, {Component} from "react";

import "../../styles/style.scss";
import {Link} from "react-scroll";


export default class NavBar extends Component{
	render(){
		return(
			<nav className = "mask-row">
				
			{/*<button type = "button" data-toggle= "collapse" data-target = "#navbarNavMenu" aria-controls="navbarNavMenu"
			aria-expanded="false"
			aria-label="Toggle navigation">
		<i className = "fas fa-bars fa-lg"></i>*/}
			
			<div className ="mask-row" id = "navbarNavMenu" >
	
				<button className = "mask-button">
					<Link to = "about"
					className = "nav-link"
					activeClass="active"
					spy={true}
					smooth={true}>About</Link>
				</button>
				<button className = "mask-button">
					<Link to = "my-samples"
					className = "h2"
					activeClass="active"
					spy={true}
					smooth={true}>Samples</Link>
				</button>
				<button className = "mask-button">
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

/*import React from "react";
import { Link } from "react-router-dom";


function NavTabs() {
	return (		
			<div className = "mask-hero" id = "navbarNavMenu" >
				<ul className = "mask-hero">
					<li className = "nav-item">
						<Link to = "/About" className = {window.location.pathname === "/" ? "nav-link active": "nav-link"}>About</Link>
					</li>
					<li className = "nav-item">
						<Link to = "/Samples" className = {window.location.pathname === "/" ? "nav-link active": "nav-link"}>Samples</Link>
					</li>
				
					
				</ul>
			</div>
		
		
		);
	}*/
