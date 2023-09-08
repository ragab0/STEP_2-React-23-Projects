import React from 'react';
import logo from './Troll Face.png'

export default function Nav() {
    return(
        <nav>
            <div className='nav--logo'>
                <img src={logo} alt="logo" />
                <h3>Meme Generator</h3>
            </div>
            <div className='nav--info'>
                <p>React Course - Project 3</p>
            </div>
        </nav>
    )
}