import React, {Component} from "react";
import MySamples from "../Carousel.jsx";
import { Container, Row, Col} from "react-bootstrap";
import "../../styles/style.scss";
import "../../styles/carousel.scss";
export default class Samples extends Component {
    render () {
        return (
            <Container className = "hr three">
                <Row>
                <Col md={7} className="hr three">
               </Col>
               <Col md={100} style={{ paddingBottom:50 }} className = "article">
              <div className ="contact-header" id = "my-samples">
              <h2 style={{ paddingBottom: 5 }} className="h2">
                 Image Samples Here</h2>
                
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