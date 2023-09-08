import React from 'react';
// import mylogo from 'logo.png'

function Nav(props) {
    return(
        <nav className='container-mb'>
            <div className='nav-logo'>
                <img src='/logo.png' alt="web_logo" /> 
                <h2>ReactFacts</h2>
            </div>
            <div className='nav-items'> 
                <h4>Light</h4>
                <div onClick={props.toggleDarkMode}></div>
                <h4>Dark</h4>

            </div>
        </nav>
    )
}

export default Nav;