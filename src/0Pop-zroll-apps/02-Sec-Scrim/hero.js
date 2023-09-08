import React from 'react';
import hero from './Group 77.png'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'

function Head() {
    return(
        <div>
            <section className='sec-cont'>
                <img src={hero} alt="I"/>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </section>
            <section className='sec-bar'>
                    <img src={img1} alt="img1" />
                    <img src={img2} alt="img1" />
                    <img src={img3} alt="img1" />
            </section>
        </div>
    )
}

export default Head;