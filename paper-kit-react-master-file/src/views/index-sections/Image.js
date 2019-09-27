import React, {Component} from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import {Button} from 'reactstrap';


class Image extends Component {
    render(){
        return (
            <div id="images">
            <Container>
              <Row className="text-center">
              <Col className="mr-auto ml-auto" md="3" sm="3">
                  <h4 className="images-title">Exclusive <strong>Products</strong><br/></h4>
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/SkinceuticalsSunscreen.jpg")}
                  />
                  {<br></br>}
                  <p className="text-center">Exclusive Partnership with <br></br> 
                  <strong> // SkinCeuticals Skincare. </strong>
                  <br />
                  </p>
                  
                  <Button className="btn-round" color="primary" href="./ProductPage" target="_self">
                     Shop Products
                    </Button>
                    <br /> <br />
                </Col>
                <Col className="mr-auto ml-auto" md="3" sm="3">
                  <h4 className="images-title">Medical <strong>Aesthetics</strong><br/></h4>
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/Hallway.jpg")}
                  />
                  {<br></br>}
                  <p className="text-center">Highly Trained Aestheticians <br></br>
                  <strong>// Onsite Medical Director</strong></p>
                  <Button className="btn-round"  target="_self" color="primary" href="./TeamPage">
                      Meet The Team
                    </Button>
                </Col>
        { <br></br>}{ <br></br>}
                <Col className="mr-auto ml-auto" md="3" sm="3">
                  <h4 className="images-title">Custom <strong>Skincare</strong><br /></h4>
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/SkinceuticalsBoxes.jpg")}
                  /><br></br>
                  <p className="text-center">Customized Skincare Plans <br></br>
                  <strong>// Tailored To You</strong></p>
                  <Button className="btn-round"  target="_self" color="primary" href="/BookPage">
                      Book A Service
                    </Button>
                </Col>
              </Row>
              {<br></br>}{<br></br>}
            </Container>
          </div>
        );
    }
}
export default Image; 