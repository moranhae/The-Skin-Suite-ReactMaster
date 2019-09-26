/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";


// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";



// index sections
import Image from "views/index-sections/Image.js";
import LandingPage from "views/index-sections/LandingPage";
import LandingPageHeader from "components/Headers/LandingPageHeader";
import ServicesPageImage from "views/index-sections/ServicesPageImage";
import LocationBookImage from "views/index-sections/LocationBookImage";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <><div className="main">
      <IndexNavbar />
      <ServicesPageImage />
      <Image  />
      <LandingPageHeader />
      <LandingPage />
      <LocationBookImage />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
