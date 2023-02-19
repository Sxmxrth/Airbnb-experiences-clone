import React from "react"

function Card(props) {
    return (
        // <h1>This is a Card component</h1>
        <div className="card">
            <img src={require(`./${props.img}`)} alt="katie" className="cardPhoto" />

            <div className="cardStats">
                <img src={require("./star.png")} alt="star" className="starPhoto" />
                <span>{props.rating}</span>
                <span>{props.reviewCount} • </span>
                <span> {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>

        </div>



    )
}

export default Card;