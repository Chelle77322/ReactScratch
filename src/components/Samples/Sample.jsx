import React, {Component} from "react";
import MySamples from "../Carousel.jsx";
import { Container, Row, Col} from "react-bootstrap";
export default class Samples extends Component {
    render () {
        return (
            <Container className = "hr six">
                <Row>
                <Col md={7} className="hr six">
               </Col>
               <Col md={100} style={{ paddingBottom:50 }} className = "main">
              <div className ="contact-header" id = "my-samples">
              <h2 style={{ paddingBottom: 5 }} className="tdbc-h2">
                 Samples Here</h2>
                
                </div>
                <div style={{ padding: 20, textAlign: "center" }}>
                    
               <MySamples />
                </div>
              </Col>
                </Row>
            </Container>
        )
    }
}