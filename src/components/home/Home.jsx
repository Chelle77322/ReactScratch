import React, {Component} from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../../styles/style.scss"


export default class Home extends Component{
  render(){
  return (
    <section>
      <Container fluid className = "Recontainer" id="home">
        
        <Container className="home-content">
          <Row>
            <Col>
            <div className ="home-header typewriter h1">
            <h1 style={{ paddingBottom: 5 }} className="heading">
              </h1>
              
              </div>
              <div style={{ padding: 50, textAlign: "center" }}>
               
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
     
    </section>
  );
}
}
