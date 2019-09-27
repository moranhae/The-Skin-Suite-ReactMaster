import React, {Component} from "react"; 
import {
    Row,
    Container, 
    Col
  } from "reactstrap";

class ServicesListing extends Component {
    render(){
        return (
            <>
            <Container className="section text-center">
                <Row>
            <Col md="3">
            <div className="info">
              <div className="description">
                <h1>Facials</h1>
                <h4 className="info-title">HydraFacial MD</h4>
                <p className="description">
                  <br />
                  <strong>HydraFacial MD is an industry-leading skin care system 
                  that elevates the traditional facial. </strong>
                  <br />
                  <br />
                  Only HydraFacial uses patented technology <br /> to cleanse, extract, and hydrate. <br/> HydraFacial super serums are made with nourishing ingredients <br/> that create an instantly gratifying glow.
               <br /> 
               $170
                </p>
                <h4 className="info-title">Custom Facials</h4>
                <p className="description">
                  <br />
                 <strong> Using SkinCeuticals  products, your aesthetician will customize a facial <br />
                  based on your skin's unique needs. </strong>
                  <br /> 
                  $100+
                </p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
              <div className="description">
              <h1>Peels</h1>
                <h4 className="info-title">Gel Peel</h4>
                <p><br /><strong> A refreshing and vitalizing peel to leave skin fresh, clean, and smooth. </strong>
                <br /> $85
                </p>
                <h4 className="info-title">Red Carpet Ready</h4>
                <p> <br /> <strong> Beginning with a dermaplaning session, Red Carpet Ready leaves skin fully refreshed and ready for any special event. </strong>
                <br /> $95 <br /> //Includes Dermaplane
                </p>
                <h4 className="info-title">Salicylic Acid</h4>
                <p> <br />
                <strong>The best treatment for whiteheads and blackheads,<br/> our 
                  Salicylic Acid
                 peel dissolves pore-clogging debris <br /> and helps prevent acne formation.</strong><br />
               <br />
                Available in two formulations! <br />
                20% $110 // 30% $125
                </p>
                <h4 className="info-title">Glycolic Acid</h4>
                <p> <br />
               <strong> The industry leader in chemical exfoliation,<br /> our
                  Glycolic Acid
                peel gently removes the outermost layer of dead skin cells.<br />
                 Perfect for scarring, skin discoloration and signs of aging, <br /> like fine lines and wrinkles.</strong>
             <br /> <br />
             Available in two formulations!
              <br />
                20% $110 // 30% $125
                </p>
                <h4 className="info-title">Pigment Balancing</h4>
                <p> <br />
                  <strong>// ask your aesthetician if pigment balance is right for you!</strong> <br />
                 $170
                </p>
                <h4 className="info-title">Advanced Corrective</h4>
                <p> <br />
                  <strong>// ask your aesthetician if advanced corrective is right for you! </strong><br />
                 $225 
                </p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
             
              <div className="description">
              <h1>SkinPen</h1>
                <h4 className="info-title">Mirconeedling</h4>
                <p> <br />
               <strong> SkinPen by Bellus Medical is the first microneedling device cleared by the FDA, clinically proven to safely and effectively treat <br /> facial acne scars for ages 22 and up. </strong> <br /> <br />
With as few as three non-invasive  treatments spaced 30 days apart, you can drastically improve your skin's appearance and step out with confidence. <br />$300
                </p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <div className="info">
             
              <div className="description">
              <h1>More</h1>
                <h4 className="info-title">LED Therapy</h4>
                <p> <br />
                 <strong> Our LED Therapy treatment helps refine and correct age spots, acne, and wrinkles. </strong>
                  <br />
                <br />
              Unlike other types of light therapy, LEDs do not contain ultraviolet rays. Therefore, they’re safe for regular use.
                  <br />
                  $30
                </p>
                <h4 className="info-title">Lymphatic Therapy</h4>
                <p> <br />
                 <strong> Manual Lymphatic Massage is a gentle treatment used to assist the Lymphatic <br />
                 and Circulatory systems in the movement of fluids, toxins, <br />
                 and other blockages in order to improve immune response, skin circulation,<br />
                  and overall wellness. </strong>
                  <br />
                  $30
                </p>
                <h4 className="info-title">Dermaplane</h4>
                <p> <br />
                 <strong> Your aesthetician will gently scrape the surface of your skin with a surgical scalpel, removing peach fuzz and dead skin cells. </strong>
                  <br /> <br /> An excellent form of physical exfoliation, Dermaplaning will leave your skin smooth and ready for any treatment or product. 
                  <br />
                  As an add-on $30 <br />
                  // a-la-carte $60
                </p>
               
              </div>
            </div>
          
          </Col>
          </Row>
        </Container>
        </>
        );
    }
}
export default ServicesListing; 