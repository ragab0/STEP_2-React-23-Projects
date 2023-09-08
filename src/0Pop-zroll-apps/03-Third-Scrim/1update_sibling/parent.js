import React from "react";
import ChildOne from "./child_one";
import ChildTwo from "./child_two";

export default function Parent() {

    let [myCount, myCountSet] = React.useState(0)

    return (
        <section>
            <h1>1</h1>
            <ChildOne myC={myCount} myCS={myCountSet}/>
            <ChildTwo myC={myCount} myCS={myCountSet}/>
        </section>
    )
}