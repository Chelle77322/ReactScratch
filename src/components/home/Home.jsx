import React, {Component} from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../../styles/style.scss"


export default class Home extends Component{
  render(){
  return (
   <section>
      <Container fluid className = "mask-container" id="home">
        
        <Container>
          <Row>
            <Col>
            <div className ="mask-hero">
            <h1 style={{ paddingBottom: 5 }} className="h1"> 
Basic Isomorphic React Template App

              </h1>
              
              </div>
              <div style={{ padding: 50, textAlign: "center" }}>
              <p className = "p,li"></p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
   </section>  
 
  );
}
}
