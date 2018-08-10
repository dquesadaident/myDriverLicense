import React from "react";
import "./DLFront.css"

export default class DLFront extends React.Component {


    render() {
        const { fields } = this.props;
        return(
            <div className="grid-container">
                <div className="left">
                    <div className="area-overlap header">
                        <h1>UTAH</h1>
                    </div>
                    <div className="l-photo">
                        <img alt="photo" src="https://vignette.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest?cb=20160923150728"></img>
                    </div>
                    <div className="sign">
                        <p>
                            <img alt="sign" src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Terry_Cavanagh_Signature.svg"></img>
                        </p>
                    </div>
                </div>
                <div className="right">
                    <div className="area-overlap r-header">
                        <h1 >DRIVER LICENSE</h1>
                    </div>
                    <div className="r-mid">
                        <span className="num">4d </span>
                        <span>{fields.driverLicense}</span>
                        <br/>
                        <span className="num"> 3 </span>
                        <span className="bluefield">DOB</span>
                        <span className="dob_content">{fields.dateOfBirth}</span>
                        <br/>
                        <span className="num">1 </span>
                        <span> {fields.lastName}</span>
                        <br/>
                        <span className="num"></span>
                        <span> <p>{fields.firstName}</p></span> info@castillo.cr
                        <br/>
                        <span className="num">8</span>
                        <span> <p>{fields.street+" "+fields.city+" "+fields.state+" "+fields.zip}</p> </span>
                    </div>
                    <div className="r-bot">
                        <div className="area-overlap text">
                        </div>
                        <div className="r-photo">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}