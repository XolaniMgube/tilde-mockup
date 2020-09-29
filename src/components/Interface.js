import React from 'react'
import "./myStyle.css"

function Interface() {
    return(
        <div>
            <div className="container">
                <h1>Reviews you Made</h1>
                <h3 className="subHead">Total Reviews:</h3>
                <h3 className="data">20</h3>
                <h3 className="subHead">Aggreements:</h3>
                <h3 className="data">14</h3>
                <h3 className="subHead">Disagreements:</h3>
                <h3 className="data">6</h3>
                <h3 className="subHead">Accuracy:</h3>
                <h3 className="data">70%</h3>
            </div>
        </div>
    )
}

export default Interface