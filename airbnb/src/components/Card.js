import React from "react"

function Card(props) {
    console.log(props.element);

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.country === "Online") {
        badgeText = "Online"
    }



    return (
        // <h1>This is a Card component</h1>
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={require(`./${props.coverImg}`)} alt="katie" className="cardPhoto" />

            <div className="cardStats">
                <img src={require("./star.png")} alt="star" className="starPhoto" />
                <span>{props.stats.rating}</span>
                <span>{props.stats.reviewCount} • </span>
                <span>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>

        </div>

    )
}

export default Card;