import React, {Component} from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LocationBookImage from "views/index-sections/LocationBookImage";
import { Button, Container} from "reactstrap";
import DemoFooter from "components/Footers/DemoFooter.js";


class BookPage extends Component {
    render(){
        return(
            <>
            <IndexNavbar />
            <LocationBookImage />
            <h1 className="text-center">Come See Us!</h1>
            <h3 className="text-center">We can't wait to help you glow!</h3>
            <br />
            <Container className="text-center">
            <Button
                    href="tel:704-713-9483"
                    className="btn-round mr-1"
                    color="primary"
                    target="_blank"
                    
                  >
                    Call Now
                  </Button>
                  <Button href="https://goo.gl/maps/Mj4uYzxDY9soC5BbA" 
                  target="_blank" 
                  className="btn-round"
                   color="primary"
                    type="button">
                    Take Me There! 
                  </Button>
       </Container>

       <br />
       <br />
       <DemoFooter />
       </>
        );
    }
}
export default BookPage; 