import React from "react";
import boxes_data from "./boxes_data";
import Box from "./box";

export default function Boxes() {

    let styles = {
        gap: '4px', flexFlow: 'row wrap'
    }

    return (
        <section style={styles}>
            { 
                boxes_data.map((e, i) => <Box state={e.on} />)
            }
        </section>
    )
}