/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {Component} from "react";
import { Container, Row, Col} from "react-bootstrap";

import "../../styles/style.scss"


export default class Contact extends Component{
  render(){
  return (
    <section>
      <Container fluid className="hr" id="contact">
        
        <Container className="mask-container">
          <Row>

      <Col md={100} style={{ paddingBottom:50 }} className = "mask-section">
            <div className ="contact-header" id = "my-contact">
            <h3 style={{ paddingBottom: 5 }} className="h3">
               Contact</h3>
              
              </div>
              <div style={{ padding: 20, textAlign: "center" }}>
              <p className = "lead">Follow along </p>
              </div>
             
             
  <Col md={100} style={{ paddingBottom:50 }} className ="footer">

  
     
   
 

    <div>
    <h5 className = "h4 article">Connect with Me</h5>
      <span className="location"><span className="location-icon fa fa-map-marker p tdbc-h4"></span><span className="tdbc-h4">Adelaide, South Australia</span></span>
    </div>
        <div className="rounded-social-buttons">
        <a className="social-button linkedin" href="https://www.linkedin.com/in/michelle-hall-08021434/"><i className="fab fa-linkedin tdbc-button_icon"></i></a>
        <a className="social-button github" href="https://github.com/Chelle77322/"><i className="fab fa-github tdbc-button_icon"></i></a>
    
    </div>

 

              </Col>
            </Col>
          </Row>
        </Container>
      </Container>
    
    </section>
  );
}

}
