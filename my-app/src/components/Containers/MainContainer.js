import Form from "../Form/Form";
import Barcode from "../Barcode/Barcode";
import DLFront from "../Driverlicense/DLFront";
import React, {Component} from "react";
import Header from "../Header/Header";

class MainContainer extends Component {

    state = {
        fields: {}
    };

    onChange = updatedValue => {
        this.setState({
            fields: {
                ...this.state.fields,
                ...updatedValue
            }
        });
    };

    printLicense = (fields) => {
        return (
            <div className="row">
                <div className="col">
                    <DLFront className="DriverLicense" fields={fields}/>
                </div>
                <div className="col">
                    <Barcode data={fields.dl}/>
                </div>
            </div>
        );
    };

    render() {
        const {generateBarCode} = this.state.fields;
        return(
            <div className="App">
                <Header/>
                <Form onChange={fields => this.onChange(fields)}/>
                {
                    generateBarCode ? this.printLicense(this.state.fields) : null
                }
            </div>
        );

    }
}
export default MainContainer;
