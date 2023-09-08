import React from "react"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

    let [isShown, isShownSet] = React.useState(true);

    function toggleHandle() {
        isShownSet(e => !e)
    }

    return (
        <section>
            {props.data.setup && <h3>{props.data.setup}</h3>}
            {isShown && <p>{props.data.punchline}</p>}
            <button onClick={toggleHandle}>{isShown? 'Hide' : 'Show'} Content</button>
            <hr />
        </section>
    )
}