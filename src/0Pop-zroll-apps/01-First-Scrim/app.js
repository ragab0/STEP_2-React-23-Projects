import React from 'react';
import Nav from './nav';
import Main from './main';
import './app.css';

function FirstApp() {

    const [darkMode, darkModeSetter] = React.useState(true)
    
    function toggleDarkMode() {
        darkModeSetter(old => !old)
    }


    return(
        <div className={darkMode ? "" : "light"}>
            <Nav toggleDarkMode={toggleDarkMode}/>
            <Main />
        </div>
    )
}

export default FirstApp;