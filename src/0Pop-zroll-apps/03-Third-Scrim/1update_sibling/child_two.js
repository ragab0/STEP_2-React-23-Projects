import React from "react";

export default function ChildTwo(props) {

    function myHandler() {
        return props.myCS(e => e-1);
    }

    console.log('fromChild2');

    return (
        <button onClick={myHandler}>Child Two (-): {props.myC}</button>
    )
}