import React from "react"
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
// import katie from "./components/katie.png"

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Navbar />
        {/* <Hero /> */}
        <Card img={"katie.png"} rating="5.0" reviewCount="(6)" country="Sweden" title="Life lessons with Katie Zaferes" price="136" />

      </header>
    </div>
  );
}

export default App;
