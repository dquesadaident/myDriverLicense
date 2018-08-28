import React from "react";
import "./DLFront.css"
import {generateSmallDate, getDateSlashed} from "../../utils/functions";

export default class DLFront extends React.Component {



    render() {
        const { fields } = this.props;

        return(
            <div className="grid-container">
                <div className="left">
                    <div className="area-overlap header">
                        <h1>{fields.state}</h1>
                    </div>
                    <div className="l-photo">
                        <img alt="photo" src={fields.srcPhoto}/>
                    </div>
                    <div className="sign">
                        <img alt="sign" src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Terry_Cavanagh_Signature.svg"/>
                    </div>
                </div>
                <div className="right">
                    <div className="area-overlap r-header">
                        <h1 >DRIVER LICENSE</h1>
                    </div>
                    <div className="r-mid">

                        <div className="center">
                            <div className="izq">
                                <span className="num">4d </span>
                                <span className="driverlicense">{fields.driverLicense}</span>
                                <br/>
                                <span className="num"> 3 </span>
                                <span className="bluefield">DOB</span>
                                <span className="dob_content">{getDateSlashed(fields.dateOfBirth)}</span>

                            </div>
                            <div className="der">
                                <span className="num">4a </span>
                                <span className="bluefield">ISS </span>
                                <span> {getDateSlashed(fields.issue)} </span>
                                <br/>
                                <span className="num">4b </span>
                                <span className="bluefield">EXP </span>
                                <span> {getDateSlashed(fields.expiration)} </span>
                            </div>

                            <span className="num">1 </span>
                            <span className='lastName'> {fields.lastName}</span>
                            <br/>
                            <span className="num">2 </span>
                            <span className="firstName">{fields.firstName}</span>
                            <span className="space"> </span>
                            <span className="middleName">{fields.middleName}</span>
                            <br/>
                            <span className="num">8 </span>
                            <span> {fields.street}</span>
                            <br/>
                            <span>{fields.city}</span>
                            <span className="space">,</span>
                            <span>{fields.alpha2}</span>
                            <span className="space"> </span>
                            <span>{fields.zip}</span>
                        </div>
                        <br/>
                    </div>
                    <div className="r-bot">
                        <div className="bot-left">
                            <span className="num">5 </span>
                            <span className="bluefield">DD </span>
                            <span className={"ddValue"}> {fields.dd} </span>
                            <br/>
                            <span className="num">9 </span>
                            <span className="bluefield">Class </span>
                            <span> D </span>
                            <br/>
                            <span className="num">15 </span>
                            <span className="bluefield">SEX </span>
                            <span> {fields.sex} </span>
                            <br/>
                            <span className="num">16 </span>
                            <span className="bluefield">HGT </span>
                            <span> {fields.height} </span>
                            <br/>
                            <span className="num">17 </span>
                            <span className="bluefield">WGT </span>
                            <span> {fields.weight + " lb"} </span>
                            <br/>
                            <span className="num">18 </span>
                            <span className="bluefield">EYES </span>
                            <span> {fields.eyes} </span>
                            <br/>
                            <span className="num">19 </span>
                            <span className="bluefield">HAIR </span>
                            <span> {fields.hair} </span>
                        </div>
                        <div className="bot-center">
                            <span className="num">9a </span>
                            <span className="bluefield">END </span>
                            <span> NONE </span>
                            <br/>
                            <span className="num">12 </span>
                            <span className="bluefield">REST </span>
                            <span> B </span>
                            <br/>
                            <span className="shortdob">{ generateSmallDate(fields.dateOfBirth)} </span>

                        </div>
                        <div className="bot-right">
                            <img alt="photo" src={fields.srcPhoto}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}