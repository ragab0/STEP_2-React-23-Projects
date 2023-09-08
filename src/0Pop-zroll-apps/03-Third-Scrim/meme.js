import React, { useState } from "react";
import meme from './memeimg.png'


export default function Meme(props) {

    // eslint-disable-next-line no-unused-vars
    const [memes, setMemes] = useState('lg')
    const [memeImg, setMeme] = useState(meme);
    const [formApi, formApiSet] = React.useState({})


    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(toJson => toJson.json())
            .then(jsData => setMemes(jsData.data.memes))
    }, [])


    function memeGenerator() {
        let random = Math.floor(Math.random() * memes.length);
        setMeme(memes[random].url);
    }


    function inputHandler(e) {
        let {name, value} = e.target
        formApiSet(old => ({...old, [name]: value}))
    }


    return(
        <section>
            <form>
                <input name="top" onChange={inputHandler}/>
                <input name="bottom" onChange={inputHandler}/>
            </form>
            <button onClick={memeGenerator}>Get a new meme image  🖼</button>
            <div className="sec-img">
                <img src={memeImg} alt="meme" width="100%" height='100%'/>
                <section>
                    <p>{formApi.top}</p>
                    <p>{formApi.bottom}</p>
                </section>
            </div>
        </section>
    )
}