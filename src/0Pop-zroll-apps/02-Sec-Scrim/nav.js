import React from 'react';
import vector from './Vector.png';

const mySpan = [1,'2',3,true,0,false,undefined, [1,2,false]]
console.log(mySpan);
function Nav() {
    return(
        <nav>
            <img src ={vector} alt="theimg"/>
            {mySpan}
        </nav>
    )
}

export default Nav;