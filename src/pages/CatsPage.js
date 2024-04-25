// CatsPage.js
import React from "react"
const CatsPage = ({ cats }) => {
    return (
        <>
            <h1>Cats should not be fed sugary foods.</h1>
            <p>{cats}</p>
        </>
    )
}

export default CatsPage