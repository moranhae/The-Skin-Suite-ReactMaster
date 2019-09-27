import React, {Component} from "react";
import { Button, Container } from "reactstrap";

class TeamPhoto extends Component {
    render(){
        return (
            <>
            <div
              style={{
                backgroundImage: "url(" + require("assets/img/SkinSuite-TeamPhoto.jpg") + ")"
              }}
              className="page-header"
              data-parallax={false}
            >
              <div className="filter" />
              <Container>
                <div className="motto text-center">
                  <h1>Our <strong>Team </strong></h1>
                  <br />
                  <Button
                    href="/BookPage"
                    className="btn-round mr-1"
                    color="primary"
                    target="_self"
                    outline
                  >
                    Book Now
                  </Button>
                  <Button href="/ReviewsPage"
                    target="_self"
                    className="btn-round mr-1" 
                    color="primary" 
                    outline >
                    See Our Reviews
                  </Button>
                </div>
              </Container>
            </div>
          </>
        );
    }
}
export default TeamPhoto; 