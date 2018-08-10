import React from "react";
import utahDriverLicenseConverter from "../../utils/dl.js";

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
            <form>
                <input
                    name="lastName"
                    placeholder="Last name"
                    value={lastName}
                    onChange={e => this.change(e)}
                />

                <input
                    name="firstName"
                    placeholder="First name"
                    value={firstName}
                    onChange={e => this.change(e)}
                />

                <input
                    name="middleName"
                    placeholder="Middle Name"
                    value={middleName}
                    onChange={e => this.change(e)}
                />

                <input
                    name="driverLicense"
                    placeholder="Driver License"
                    value={driverLicense}
                    onChange={e => this.change(e)}
                />

                <input
                    name="street"
                    placeholder="street"
                    value={street}
                    onChange={e => this.change(e)}
                />

                <input
                    name="city"
                    placeholder="city"
                    value={city}
                    onChange={e => this.change(e)}
                />

                <input
                    name="state"
                    placeholder="state"
                    value={state}
                    onChange={e => this.change(e)}
                />

                <input
                    name="zip"
                    placeholder="zip"
                    value={zip}
                    onChange={e => this.change(e)}
                />

                <input
                    name="dateOfBirth"
                    placeholder="dateOfBirth"
                    value={dateOfBirth}
                    onChange={e => this.change(e)}
                />

                <input
                    name="sex"
                    placeholder="sex"
                    value={sex}
                    onChange={e => this.change(e)}
                />

                <input
                    name="height"
                    placeholder="height"
                    value={height}
                    onChange={e => this.change(e)}
                />

                <input
                    name="weight"
                    placeholder="weight"
                    value={weight}
                    onChange={e => this.change(e)}
                />

                <input
                    name="issue"
                    placeholder="issue"
                    value={issue}
                    onChange={e => this.change(e)}
                />


                <input
                    name="expiration"
                    placeholder="expiration"
                    value={expiration}
                    onChange={e => this.change(e)}
                />

                <input
                    name="hair"
                    placeholder="hair"
                    value={hair}
                    onChange={e => this.change(e)}
                />

                <input
                    name="eyes"
                    placeholder="eyes"
                    value={eyes}
                    onChange={e => this.change(e)}
                />

                <input
                    name="dd"
                    placeholder="dd"
                    value={dd}
                    onChange={e => this.change(e)}
                />

                <input
                    name="issuerIdentificationNumber"
                    placeholder="issuerIdentificationNumber"
                    value={issuerIdentificationNumber}
                    onChange={e => this.change(e)}
                />

                <button onClick={e => this.onSubmit(e)}>Generate</button>
            </form>
        );
    }
}
