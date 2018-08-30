import React from "react";
import utahDriverLicenseConverter from "../../utils/dl.js";
import "./form.css";
import {generateRandom, generateStatic} from "../../utils/functions";

export default class Form extends React.Component {

    initialState = {
        lastName: "",
        firstName: "",
        middleName: "",
        driverLicense: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        dateOfBirth: "",
        height: "",
        weight: "",
        issue: "",
        expiration: "",
        hair: "",
        eyes: "",
        dd: "",
        issuerIdentificationNumber: "",
        dl: "",
        opt: "1",
        alpha2: ""
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    change = e => {

        this.setState({
            [e.target.name]: e.target.value
        },
            () => {
                this.props.onChange(
                    {
                        generateBarCode: true,
                        ...this.state,
                        dl: utahDriverLicenseConverter(this.state)
                    }
                )
            });
    };

    onSubmit = (e)=> {
        let incomingDL;
        e.preventDefault();
        console.log("OPT value", this.state.opt);
        switch(this.state.opt){
            case "1":
                incomingDL = generateRandom();
                this.setState(incomingDL);
                this.props.onChange({
                    generateBarCode: true,
                    ...incomingDL,
                    dl: utahDriverLicenseConverter(incomingDL)

                });
                console.log("DL in opt 1>>", this.state.dl);
                break;

            case "2":
                incomingDL = generateStatic();
                this.setState(incomingDL);
                console.log("the DL?", incomingDL);
                this.props.onChange({
                    generateBarCode: true,
                    ...incomingDL,
                    dl: utahDriverLicenseConverter(this.state)
                });
                console.log("DL in opt 2>>", this.state.dl);
                break;

            case "3":
                this.setState(this.initialState);

                    this.props.onChange({
                        generateBarCode: false,
                        dl: {}
                    });
                console.log("DL in opt3>>", this.state.dl);
                break;

            default: break;
        }
    };

    render() {

        const {
            issuerIdentificationNumber, lastName, firstName, middleName, driverLicense, street, city, state, zip, dateOfBirth,
            sex, height, weight, issue, expiration, hair, eyes, dd
        } = this.state;
        return (
            <div className="initialWrapper">
                <div className="row">
                    <div className="col">
                        <select  onChange={e => this.change(e)} name="opt" className="optSelect">
                            <option value={"1"}>Random person</option>
                            <option value={"2"}>Ragnar Lothbrok</option>
                            <option value={"3"}>Manual input</option>
                        </select>
                    </div>
                </div>
                <form>
                    <div className="row">
                        <div className="col">
                            <label>Last name</label>
                            <input type="text"
                                   className="form-control"
                                   name="lastName"
                                   placeholder="Last name"
                                   value={lastName}
                                   onChange={e => this.change(e)}
                            />
                        </div>
                        <div className="col">
                            <label>First name</label>
                            <input type="text"
                                   className="form-control"
                                   name="firstName"
                                   placeholder="First name"
                                   value={firstName}
                                   onChange={e => this.change(e)}
                            />
                        </div>
                        <div className="col">
                            <label>Middle Name</label>
                            <input type="text"
                                   className="form-control"
                                   name="middleName"
                                   placeholder="Middle Name"
                                   value={middleName}
                                   onChange={e => this.change(e)}
                            />
                        </div>
                        <div className="col">
                            <label>Sex (Male: 1, Female: 2)</label>
                            <input type="text"
                                   className="form-control"
                                   name="sex"
                                   placeholder="Sex (Male: 1, Female: 2)"
                                   maxLength="1"
                                   value={sex}
                                   onChange={e => this.change(e)}
                            />
                        </div>

                        <div className="col">
                            <label>Driver License</label>
                            <input type="text"
                                   className="form-control"
                                   name="driverLicense"
                                   placeholder="Driver License"
                                   value={driverLicense}
                                   onChange={e => this.change(e)}
                            />
                        </div>
                        <div className="col">
                            <label>Issuer ID Number</label>
                            <input type="text"
                                   className="form-control"
                                   name="issuerIdentificationNumber"
                                   placeholder="Issuer ID Number"
                                   value={issuerIdentificationNumber}
                                   onChange={e => this.change(e)}
                            />
                        </div>
                        <div className="col">
                            <label>Date of Birth</label>
                            <input type="text"
                                   className="form-control"
                                   name="dateOfBirth"
                                   placeholder="(MMDDYYYY)"
                                   value={dateOfBirth}
                                   onChange={e => this.change(e)}
                            />
                        </div>
                        <div className="col">
                            <label>Issue Date</label>
                            <input type="text"
                                   className="form-control"
                                   name="issue"
                                   placeholder="(MMDDYYYY)"
                                   value={issue}
                                   onChange={this.change}
                            />
                        </div>

                        <div className="col">
                            <label>Expiration Date</label>
                            <input type="text"
                                   className="form-control"
                                   name="expiration"
                                   placeholder="(MMDDYYYY)"
                                   value={expiration}
                                   onChange={e => this.change(e)}
                            />
                        </div>
                        <div className="col">
                            <label>Document Discriminator (DD)</label>
                            <input type="text" className="form-control"
                                   name="dd"
                                   placeholder="DD"
                                   value={dd}
                                   onChange={e => this.change(e)}
                            />
                        </div>
                        <div className="col">
                            <label>Street</label>
                            <input type="text"
                                   className="form-control"
                                   name="street"
                                   placeholder="Street"
                                   value={street}
                                   onChange={e => this.change(e)}
                            />
                        </div>
                        <div className="col">
                            <label>City</label>
                            <input type="text"
                                   className="form-control"
                                   name="city"
                                   placeholder="City"
                                   value={city}
                                   onChange={e => this.change(e)}
                            />
                        </div>

                        <div className="col">
                            <label>State</label>
                            <input type="text"
                                   className="form-control"
                                   name="state"
                                   placeholder="State"
                                   value={state}
                                   onChange={e => this.change(e)}
                            />
                        </div>
                        <div className="col">
                            <label>Zip</label>
                            <input type="text"
                                   className="form-control"
                                   name="zip"
                                   placeholder="Zip"
                                   value={zip}
                                   onChange={e => this.change(e)}
                            />
                        </div>

                        <div className="col">
                            <label>Height</label>
                            <input type="text"
                                   className="form-control"
                                   name="height"
                                   placeholder="Height"
                                   value={height}
                                   onChange={e => this.change(e)}
                            />
                        </div>
                        <div className="col">
                            <label>Weight</label>
                            <input type="text"
                                   className="form-control"
                                   name="weight"
                                   placeholder="Weight"
                                   value={weight}
                                   onChange={e => this.change(e)}
                            />
                        </div>

                        <div className="col">
                            <label>Hair</label>
                            <input type="text"
                                   className="form-control"
                                   name="hair"
                                   placeholder="Hair"
                                   value={hair}
                                   onChange={e => this.change(e)}
                            />
                        </div>
                        <div className="col">
                            <label>Eyes</label>
                            <input type="text"
                                   className="form-control"
                                   name="eyes"
                                   placeholder="Eyes"
                                   value={eyes}
                                   onChange={e => this.change(e)}
                            />
                        </div>
                    </div>
                    <div className="row btnRow">
                        <div className="col">
                            <button className="btn btn-light" onClick={this.onSubmit}>Generate</button>
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}
