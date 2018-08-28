import React from "react";
import generateBarcode from "pdf417";

export default function Barcode(data) {
    return (
        <div className="grid-container">
            <div className="barCodeContainer">
                <img className="barcode" alt={"barcode"} src={generateBarcode(data.data, 2, 2)}/>
            </div>
        </div>

    )
}
