import React, {Component} from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader";
import TeamBios from "views/index-sections/TeamBios.js"
import DemoFooter from "components/Footers/DemoFooter.js";
import TeamPhoto from "views/index-sections/TeamPhoto";

class TeamPage extends Component {
    render(){
        return(
            <>
            <IndexNavbar />
            <ProfilePageHeader />
            <TeamBios />
            <TeamPhoto />
            <DemoFooter />
        </>

       
            
            );
    }
}
export default TeamPage; 