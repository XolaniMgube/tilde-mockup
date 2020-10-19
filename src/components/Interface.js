import React from 'react'
import "./myStyle.css"

function Interface(props) {
    return(
        <div>
            <div className="container">
                <h1>Reviews you Made</h1>
                <h3 className="subHead">Total Reviews:</h3>
                <h3 className="data">{ props.totalReviews }</h3>
                <h3 className="subHead">Aggreements:</h3>
                <h3 className="data">{props.agreements}</h3>
                <h3 className="subHead">Disagreements:</h3>
                <h3 className="data">{props.disagreements}</h3>
                <h3 className="subHead">Accuracy:</h3>
                <h3 className="data">{props.accuracy}</h3>
            </div>
        </div>
    )
}


export default Interface