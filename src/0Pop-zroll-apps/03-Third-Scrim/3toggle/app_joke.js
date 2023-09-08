import React from "react"
import Joke from "./joke"
import jokesData from "./jokes_data"

export default function AppJoke() {

    return (
        <section>
            <h1>JokeApp</h1>
            {
                jokesData.map((j, i) => <Joke key={i} data={j} /> )
            }
        </section>
    )
}
