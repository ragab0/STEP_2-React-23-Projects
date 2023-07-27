import React from "react";

export default function Plate({ingredients}) {
    
    const { title, price, img, desc} = ingredients;
    
    return(
        <article className="menu-item" style={{width:'100%'}}>
            <img className="photo" alt={title} src={img} />
            <div className="item-info">
                <header>
                    <h4>title</h4>
                    <h4 className="price">${price}</h4>
                </header>
                <p className="item-text">{desc}</p>
            </div>
        </article>
    )
}