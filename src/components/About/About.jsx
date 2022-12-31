/* eslint-disable no-undef */
import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";


import "../../styles/style.scss"
//import PropTypes from "prop-types";

export default class About extends Component {
	render() {
		return (
<section>
      <Container fluid id="about"className = "hr">
        <Container className="mask-main-container">
          <Row>
            <Col md={7} className="mask-hero"> </Col>
			<Col md={100} style={{ paddingBottom:100 }} className = "typewriter h2">
            <div className ="about-header typewrite h2"></div>
		
			<div style={{ padding:10, textAlign: "justify" }} id = "about">
			<br/>
				<p className = "style.mask-lead">
			This is where you can change 💁 
            anything you want
			
				
				</p>
			
			</div>
			</Col>
          </Row>
</Container>			
</Container>
</section>
		);
	}
}
