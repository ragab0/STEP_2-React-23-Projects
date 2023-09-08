import React, {useState, useEffect}  from "react";

export default function EffectReturner() {

    const [show, showSetter] = useState(true)
    const [val, valSetter] = useState(window.innerWidth)

    // Read about memory leak;
    // Read about clean up function
    // if the component that contains this effect is not used in any place at the whole app then ..;
        // write a `return function` after the event listner to remove that event; THIS function only runs IF THERE is no usage from any place;

    useEffect(() => {
        let watch = () =>  valSetter(window.innerWidth) + console.log('Window changes', window.innerWidth);

        window.addEventListener('resize', watch)
        return function() {
            window.removeEventListener('resize', watch);
            console.log('Successfuly clean.');
        }
    }, [])


    function toggle() {
        showSetter(!show)
    }

    return(
        <section>
            <h1>AsyncApp 
                 <span>{val}</span>
                <hr style={{margin:"5px 0"}}/>
            </h1>
            <button onClick={toggle}>Toggle window tragger </button>
            <section>
                { show && <p>Window width: {val}</p>}
            </section>
        </section>
    )
}