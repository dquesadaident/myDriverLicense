import React from "react";
import generateBarcode from "pdf417";

export default function Barcode(data) {
    return (
        <div>
            <img alt={"barcode"} src={generateBarcode(data.data, 3, 3)}/>
        </div>

    )
}
