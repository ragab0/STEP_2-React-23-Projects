import React from 'react';
import './main.css';
import Box from './box_gen';
import { nanoid } from 'nanoid'

export default function FourthCrim() {
    let rand = () => Math.floor(Math.random()*(10)) +1;
    let genNewBoxesObj = (n=15) =>  [...Array(n)].map(() => ({id:nanoid(), value: rand(), isHeld: false}) );
    
    // The array of objects that we generate;
    let [savedBoxes, setBoxes] = React.useState(genNewBoxesObj())
    let [end, endSet] = React.useState(0)

    function handleHeld(id) { // let temp = {...obj}; if (temp.id === id); temp.isHeld = !temp.isHeld; return temp
        setBoxes((oldBoxes) => oldBoxes.map((obj) => (obj.id === id ? {...obj, isHeld: !obj.isHeld}: obj)))
    }

    function rollHeld() {
        if (!end) setBoxes(oldBoxes => oldBoxes.map((obj) => obj.isHeld ? obj : genNewBoxesObj(1)[0]))
        else setBoxes(genNewBoxesObj())
    }


    React.useEffect(() => {
        // if ((savedBoxes.filter((e,i,a)=> (e.isHeld && e.value === a[0].value )).length === savedBoxes.length)) {
        if (savedBoxes.every((e) => e.isHeld && e.value === savedBoxes[0].value)) {
            endSet(1);
            
        } else {
            endSet(0);
        }
        console.log('from side');
    }, [savedBoxes])
    

    return(

        <div className='the-box'>
                
                <div className='text'>
                    <h2>Tenzis</h2>
                    <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                </div>
                <div className='game'>
                    {savedBoxes.map((e,i) => <Box key={e.id} boxObj={e} handleHeld={handleHeld}/>)}
                </div>
                <button onClick={rollHeld}>{ end ? "New Game" : "Roll"}</button>
                {/* Generate new objects and then set them to apply the change at the end they will saved in our game directory*/}
        </div>
    )
}