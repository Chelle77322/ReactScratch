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
        <Container className="mask-container">
          <Row>
            <Col md={7} className="mask-section"> </Col>
			<Col md={100} style={{ paddingBottom:100 }} className = "h1">
            <div className ="h1"></div>
		
			<div style={{ padding:10, textAlign: "center" }} id = "about">
			<br/>
				<p className = "p,li">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			
				
				</p>
				<p className = "p,li">
				Ac tortor dignissim convallis aenean et tortor. Facilisi etiam dignissim diam quis. Neque egestas congue quisque egestas diam in arcu cursus. Arcu vitae elementum curabitur vitae. Semper eget duis at tellus at. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Vitae ultricies leo integer malesuada nunc vel risus commodo. Vitae suscipit tellus mauris a diam. Felis imperdiet proin fermentum leo vel orci porta non. Quis imperdiet massa tincidunt nunc. Congue quisque egestas diam in arcu cursus euismod. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing.
			
				
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
