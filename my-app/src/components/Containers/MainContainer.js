import Form from "../Form/Form";
import Barcode from "../Barcode/Barcode";
import DLFront from "../Driverlicense/DLFront";
import React, {Component} from "react";

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

    render() {
        const {generateBarCode, dl} = this.state.fields;
        console.log(dl,"dl")
        return(
            <div className="App">

                <Form onChange={fields => this.onChange(fields)}/>
                <p>
                    {JSON.stringify(this.state.fields, null, 2)}
                </p>
                {generateBarCode && <Barcode data={dl}/> }
                <br/>
                <DLFront className="DriverLicense" fields={this.state.fields}/>
            </div>
        );

    }
}
export default MainContainer;
