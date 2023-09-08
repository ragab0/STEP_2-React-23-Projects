import React from "react";

export default function ChildOne(props) {

    function myHandler() {
        return props.myCS(e => e+1);
    }

    console.log('fromChildOne');

    return (
        <button onClick={myHandler}>Child One (+): {props.myC}</button>
    )
}