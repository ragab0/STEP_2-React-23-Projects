import React from "react";


let i = 0;
export default function Box(props) {
    console.log(`myBoxsLegend ${i++}`);

    let [on, setOn] = React.useState(props.state)

    let styles = {
        width: '100px',
        height: '100px',
        borderRadius: '7px',
        backgroundColor: on ? '#000' : '#eee',
    }

    function toggleClick() {
        return setOn(old => !old)
    }

    return(
        <p style={styles} onClick={toggleClick}>Box</p>
    )
}