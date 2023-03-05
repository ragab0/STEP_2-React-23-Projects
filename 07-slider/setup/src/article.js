import React from "react";
import { FaQuoteRight } from 'react-icons/fa';


export default function Article({item, index, rules}) {

    const {name, image, quote, title} = item;

    return (
        <article className={rules[index] ?? ""}>
            <img alt={name} className='person-img' src={image} />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
        </article>
    )
}