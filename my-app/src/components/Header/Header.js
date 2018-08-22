import React, {Component} from "react";
import "./Header.css"
class Header extends Component {

    render() {
        return(
            <div className="mainContainer">
                <span className="superIcon">
                    <img className="logo" alt="Logo" src="../../Logo.png"/>
                </span>
                <span className="superHeader">RANDOM LICENSE GENERATOR</span>


            </div>
        );
    }

}

export default Header;
