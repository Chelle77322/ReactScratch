import React, {Component} from "react";
import PropTypes from "prop-types";
import  "../styles/style.scss";
import {WOW} from "wowjs";

export default class Background extends Component
{
    componentsDidMount() {
        const wow = new WOW ({live: false}); 
        //disables sync requirements
        wow.init()
    }
    render(){
        return (
            <div id = "body"
            className=".main.mask-container"></div>
        );
    }
}
Background.propTypes = {
    AboutRef: PropTypes.object,
    ProjectsRef: PropTypes.object,
    ResumeRef: PropTypes.object,
    ContactRef: PropTypes.object,

	fadeInLeft: PropTypes.string
}