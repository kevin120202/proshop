import { Spinner } from "react-bootstrap";

import React from 'react'

function Loader() {
    return (
        <>
            <Spinner animation="grow" role="status" style={{
                width: "100px",
                height: "100px",
                margin: "auto",
                display: "block"
            }} />
        </>
    )
}

export default Loader