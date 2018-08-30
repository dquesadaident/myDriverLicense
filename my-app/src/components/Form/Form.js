import React from "react";
import utahDriverLicenseConverter from "../../utils/dl.js";
import "./form.css";
import {generateRandom, generateStatic} from "../../utils/functions";

export default class Form extends React.Component {

    initialState (iopt, btnText){
        return {
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
        sex: "",
        opt: iopt,
        alpha2: "",
        srcPhoto: "https://randomuser.me/api/portraits/women/0.jpg",
        btnText: btnText

        }
    };

    constructor(props) {
        super(props);
        this.state = this.initialState("1", "Generate");
    }

    change = e => {

        this.setState({
            [e.target.name]: e.target.value,
            btnText: "Generate"
        },
            () => {
            if(this.state.opt === "3"){
                this.setState({ btnText: "Clear data"});
                this.props.onChange(
                    {
                        generateBarCode: true,
                        ...this.state,
                        dl: utahDriverLicenseConverter(this.state)
                    }
                )

            }

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
                this.setState(this.initialState("2", "Generate"));
                console.log("DL in opt 2>>", this.state.dl);
                incomingDL = generateStatic();
                console.log("the incomingDL?", incomingDL);
                console.log("after setState  2>>", this.state);

                this.props.onChange({
                    generateBarCode: true,
                    ...incomingDL,
                    dl: utahDriverLicenseConverter(incomingDL)
                });
                break;

            case "3":
                this.setState(this.initialState("3", "Clear data"));
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
            sex, height, weight, issue, expiration, hair, eyes, dd, btnText
        } = this.state;
        return (
            <div className="initialWrapper">
                <div className="row">
                    <div className="col">
                        <select  onChange={e => this.change(e)} name="opt" className="optSelect">
                            <option value={"1"}>Random person</option>
                            <option value={"2"}>Ragnar Lothbrok</option>
                            <option value={"3"}>Clear for manual input</option>
                        </select>
                    </div>
                    <div className="col">
                        <button className="btn btn-light" onClick={this.onSubmit}>{btnText}</button>
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
                                   onChange={e => this.change(e)}
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
                </form>

            </div>
        );
    }
}
