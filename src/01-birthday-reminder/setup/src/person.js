import React from "react";

export default function Person(props) {

    function handler() {
        props.handleData((data) => {
            return data.filter((obj) => props.obj.id !== obj.id)
        })
    }

    return(
        <article className="person">
            <img src={props.obj.image} alt={props.obj.name}/>
            <div>
                <h4>{props.obj.name}</h4>
                <p>{props.obj.age} years</p>
            </div>
            <button onClick={handler}>X</button>
        </article>
    )
}