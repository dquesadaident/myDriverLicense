import React from "react";
import utahDriverLicenseConverter from "../../utils/dl.js";
import "./form.css";

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
        sex: "",
        height: "",
        weight: "",
        issue: "",
        expiration: "",
        hair: "",
        eyes: "",
        dd: "",
        issuerIdentificationNumber: "",
        generateBarCode: false,
        dl: ""
    };

    change = e => {
        this.props.onChange({[e.target.name]: e.target.value});
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    onSubmit = e => {
        e.preventDefault();
        console.log("DL> ", utahDriverLicenseConverter(this.state))
        this.props.onChange({
            generateBarCode: true,
            dl: utahDriverLicenseConverter(this.state)

        });

        {console.log("DL>>", this.state.dl)}

        // this.props.onSubmit(this.state);
        /* this.setState({
             lastName: "",
             firstName: "",
             middleName: "",
             driverLicense: "",
             street: "",
             city: "",
             state: "",
             zip: "",
             dateOfBirth: "",
             sex: "",
             height: "",
             weight: "",
             issue: "",
             expiration: "",
             hair: "",
             eyes: "",
             dd: "",
             issuerIdentificationNumber: "",
             dl: "",
             generateBarCode: true
         });
         this.props.onChange({
             lastName: "",
             firstName: "",
             middleName: "",
             driverLicense: "",
             street: "",
             city: "",
             state: "",
             zip: "",
             dateOfBirth: "",
             sex: "",
             height: "",
             weight: "",
             issue: "",
             expiration: "",
             hair: "",
             eyes: "",
             dd: "",
             dl: "",
             issuerIdentificationNumber: "",
             generateBarCode: true
         });*/
    };

    render() {
        const {
            issuerIdentificationNumber, lastName, firstName, middleName, driverLicense, street, city, state, zip, dateOfBirth,
            sex, height, weight, issue, expiration, hair, eyes, dd
        } = this.state;
        return (
            <div className="initialWrapper">
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
                    </div>

                    <div className="row">
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
                            <input type="date"
                                   className="form-control"
                                   name="dateOfBirth"
                                   placeholder="(MM/DD/YYYY)"
                                   value={dateOfBirth}
                                   onChange={e => this.change(e)}
                            />
                        </div>
                        <div className="col">
                            <label>Issue Date</label>
                            <input type="date"
                                   className="form-control"
                                   name="issue"
                                   placeholder="(MM/DD/YYYY)"
                                   value={issue}
                                   onChange={e => this.change(e)}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label>Expiration Date</label>
                            <input type="date"
                                   className="form-control"
                                   name="expiration"
                                   placeholder="(MM/DD/YYYY)"
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
                    </div>

                    <div className="row">
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
                    </div>

                    <div className="row">
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
                            <button className="btn btn-light" onClick={e => this.onSubmit(e)}>Generate</button>
                    </div>
                </form>

            </div>
        );
    }
}
