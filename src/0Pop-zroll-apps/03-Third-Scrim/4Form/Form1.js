// creating a state for every input; IS THIS DYNAMIC !! absolotely NO;

import React from 'react';

export default function AppForm1() {
    
    const [valName, setName] = React.useState('');
    const [valMail, setMail] = React.useState('');

    function nameHandle(e) {
        let v = e.target.value;
        setName(v);
    }
    function mailHandle(e) {
        let v = e.target.value;
        setMail(v);
    }

    return(
        <section>
            <hr />
            <h1 style={{marginBottom: "10px"}}>SimpleFormApp</h1>
            <form>
                <input type="text" onChange={nameHandle}/>
                <input type="text" onChange={mailHandle}/>
            </form>
            <section>
                <p style={{fontSize:'12px'}}>{valName} && {valMail}</p>
            </section>
        </section>
    )
}