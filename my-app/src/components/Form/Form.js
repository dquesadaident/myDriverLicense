import React from "react";
import utahDriverLicenseConverter from "../../utils/dl.js";
import "./form.css";
import { generateStatic, generateRandom} from "../../utils/functions";
export default class Form extends React.Component {

    state = {
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
        generateBarCode: false,
        dl: "",
        opt: 1
    };

    change = e => {
        this.props.onChange({[e.target.name]: e.target.value});

        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e)=> {
        e.preventDefault();
        console.log(this.state.opt);
        switch(this.state.opt){

            case 1: {
                console.log("option 1");
                let dl = generateRandom(this.state)
                this.props.onChange({
                    generateBarCode: true,
                    ...dl,
                    dl: utahDriverLicenseConverter(dl)

                });
                {console.log("DL>>", this.state.dl)}
                break;
            }
            case 2: {
                console.log("option 2");
                let dl = generateStatic(this.state)
                this.props.onChange({
                    generateBarCode: true,
                    dl: utahDriverLicenseConverter(this.state)
                });
                //{console.log("DL>>", this.state.dl)}
                break;
            }
            case 3: {
                console.log("option 3");
                this.props.onChange({
                    generateBarCode: true,
                    dl: utahDriverLicenseConverter(this.state)
                });
                //{console.log("DL>>", this.state.dl)}
                break;
            }
            default: break;
        }
    }

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
                            <option value={1}>Random</option>
                            <option value={2}>Local</option>
                            <option value={3}>Test</option>
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
                            <button className="btn btn-light" onClick={e => this.onSubmit(e)}>Generate</button>
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}
