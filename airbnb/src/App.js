import React from "react"
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import Data from "./Data.js"

function App() {
  const card = Data.map(element => {
    return (
      <Card
        key={element.id}
        {...element}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {card}
      </section>

    </div>
  )
}

export default App;



