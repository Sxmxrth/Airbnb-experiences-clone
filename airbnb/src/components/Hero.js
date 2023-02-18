import React from "react"
import picGrid from "./pic-grid.png"

function Hero() {
    return (
        <section className="hero">
            <img src={picGrid} alt="grid" className="hero--photo" />
            <h1 className="hero--header">Online experiences</h1>
            <p className="hero--text">Join unique interactive activities led by
                one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero