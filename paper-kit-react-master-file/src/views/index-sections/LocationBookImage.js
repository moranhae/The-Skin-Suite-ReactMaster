import React, {Component} from "react";
import { Button, Container } from "reactstrap";

class LocationBookImage extends Component {
    render(){
        return(
            <>
            <div
              style={{
                backgroundImage: "url(" + require("assets/img/SkinSuite-GuestInLobby.jpg") + ")"
              }}
              className="page-header"
              data-parallax={false}
            >
              <div className="filter" />
              <Container>
                <div className="motto text-center">
                  <h1><strong>Ready </strong> To Book? </h1>
                  <h3>1600 E Woodlawn Rd <br />Suite 360 </h3>
                  <br />
                  <Button
                    href="tel:704-713-9483"
                    className="btn-round mr-1"
                    color="primary"
                    target="_blank"
                    outline
                  >
                    Call Now
                  </Button>
                  <Button href="https://goo.gl/maps/Mj4uYzxDY9soC5BbA" outline 
                  target="_blank" 
                  className="btn-round mr-1"
                   color="primary"
                    outline >
                    Take Me There! 
                  </Button>
                </div>
              </Container>
            </div>
          </>
        );
    }
}
export default LocationBookImage; 