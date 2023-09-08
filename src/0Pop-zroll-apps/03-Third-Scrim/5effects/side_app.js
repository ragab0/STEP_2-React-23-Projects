import React from 'react';

export default function SideApp(legend) {

    const [myCount, myCountSet] = React.useState(1);
    const [myApi, myApiSet] = React.useState("");
    /**
     * 
     */

    // React.useEffect(function() {
    //     console.log('Welcome Effected!');
    //     // Runs only for one time (The first render);
    // }, [])
    // React.useEffect(function() {
    //     console.log('Effected(With no setter(Updating))');
    //     // Its like we write it at the body of our app;
    //     // Runs in each render of our app;
    //     // You can not set a setter here;
    // })
    // React.useEffect(function() {
    //     console.log('Effected(With setter(Updating))');
    //     // Runs in each render of our app;
    //     // I can set a setter here;
    // }, [myCount])


    React.useEffect(function() {
        async function as() {
            const res = await fetch(`https://swapi.dev/api/people/${myCount}`)
            const data = await res.json()
            myApiSet(data)
            console.log('Welcome Effected!');
        }
        as()
    }, [myCount])


    // React.useEffect(function() {
    //     console.log('Welcome Effected!');
    //     fetch(`https://swapi.dev/api/people/${myCount}`)
    //         .then((allData) => allData.json())
    //         .then(data => myApiSet(data))
    // }, [myCount])





    return(
        <section>
            <h1 >This is SideApp <span>{myCount}</span><hr style={{marginBlock:"5px"}}/></h1>
            <button onClick={ () => myCountSet( _ => _+1)}>myCount</button>
            <p>
            {JSON.stringify(myApi)}lg
            </p>
        </section>
    )
}