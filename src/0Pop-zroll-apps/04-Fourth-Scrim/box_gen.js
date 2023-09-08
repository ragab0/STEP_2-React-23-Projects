import React from "react";

export default function Box(props) {
    // Box object at props.boxObj[value, isHeld]

    
    return(
        <div className={props.boxObj.isHeld ? "selected" : ""} onClick={() => props.handleHeld(props.boxObj.id)}>
            {props.boxObj.value}
        </div>
    )


}