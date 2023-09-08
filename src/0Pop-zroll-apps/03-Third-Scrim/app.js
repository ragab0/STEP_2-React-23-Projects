// What happend when you update a sibling? is its parent get updated?(No) is its siblings get update?(Yes)

import React from 'react';
import Nav from './header';
import Meme from './meme';
import Exam from './exam';
import './app.css';
import './form.css'


export default function ThirScrim() {

    
    return (
        <div>
            <Nav />
            <Meme />
            <Exam />
        </div>
    )
}