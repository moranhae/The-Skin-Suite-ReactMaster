import React, {Component} from "react";
// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Container,
    Row,
    Col
  } from "reactstrap";

class TeamBios extends Component {
    render(){
        return(
            <div className="section section-dark text-center bg-success">
            <Container>
              <h2 className="title">Meet <strong>The Team</strong></h2>
              <Row>
                <Col md="4">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/SkinSuite-DrPhoto.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                          <CardTitle tag="h4">Matt Jones, MD</CardTitle>
                          <h6 className="card-category">Onsite Medical Director</h6>
                        </div>
                      </a>
                      <p className="card-description text-center">
                        <strong>Dr. Matt Jones, MD</strong> is a Board-Certified General Surgeon that spent 15 months studying Plastic and Reconstructive Surgery. He oversees the Jon Ric Medical Spa at the Charlotte location. He and his team perform a variety of services including Botox, Juvederm, CoolSculpting, Laser Hair Removal and more. 
  <br></br><br></br>
                        He graduated from UNC-Chapel Hill and is an active member of the American Academy of Anti-Aging Medicine. 
                      </p>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        className="btn-just-icon btn-primary"
                        color="link"
                        href="https://jonriccharlottemedicalspa.com/"
                        target="_blank"
                        
                        >
                        <i className="fa fa-link" />
                      </Button>
                      <Button
                        className="btn-just-icon btn-primary ml-1"
                        color="link"
                        href="https://www.facebook.com/JonRicCharlotteMedicalSpa/"
                        target="_blank"
                      >
                        <i className="fa fa-facebook" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/SkinSuite-LaurenAboveHeadshot.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                          <CardTitle tag="h4">Lauren Clark</CardTitle>
                          <h6 className="card-category">Owner, The Skin Suite</h6>
                        </div>
                      </a>
                      <p className="card-description text-center">
                      <strong>Lauren Clark </strong> is the founder of The Skin Suite, a company she launched in 2017 through her association with Jon Ric Medical Spa.
                        She obtained her education as an Aesthetician through The Aveda Institute.
                        Lauren remains committed to her career and the community her family calls home.
                        <br></br><br></br>
                         She and husband, Lyndon, were married in 2014. 
                         They have two sons, Henry and Maximus.
                      </p>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        className="btn-just-icon btn-primary"
                        color="link"
                        href="https://www.instagram.com/theskinsuiteclt/"
                        target="_blank"
                      >
                        <i className="fa fa-instagram" />
                      </Button>
                      <Button
                        className="btn-just-icon btn-primary ml-1"
                        color="link"
                        href="https://www.facebook.com/theskinsuiteCLT/"
                        target="_blank"
                      >
                        <i className="fa fa-facebook" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-profile card-plain">
                    <div className="card-avatar">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/SkinSuite-LeanneHeadshot.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <div className="author">
                          <CardTitle tag="h4">Leann Williamson</CardTitle>
                          <h6 className="card-category">Aesthetician</h6>
                        </div>
                      </a>
                      <p className="card-description text-center">
                      Skin health has always been an interest of Leann's. 
                      <strong> Leann </strong> graduated from Gaston College of Esthetics in 2014 
                         and has since received certifications in Microdermabrasion, Microneedling, Chemical Peels, Dermaplane and HydraFacial MD.
                    <br></br><br></br>
                     Every face she sees is unique opportunity to listen to specific concerns and provide a personalized service.
                       Her goal is to make your visit an enjoyable, relaxing and pleasant experience.
                      </p>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        className="btn-just-icon btn-primary"
                        color="link"
                        href="https://www.instagram.com/spaladyleann/"
                        target="_blank"
                      >
                        <i className="fa fa-instagram" />
                      </Button>
                      <Button
                        className="btn-just-icon btn-primary ml-1"
                        color="link"
                        href="https://www.facebook.com/SpaLadyLeann/"
                        target="_blank"
                      >
                        <i className="fa fa-facebook" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        );
    }
}
export default TeamBios; 