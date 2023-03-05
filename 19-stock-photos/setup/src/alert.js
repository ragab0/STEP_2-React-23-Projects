// import React, { useEffect } from 'react'
import React, { useEffect } from "react"

const Alert = ({alert, setAlert}) => {
    const style = {
        position:'fixed',
        top: '10px',
        left: '50%',
        zIndex: 1,
        transform: 'translateX(-50%)',
        padding: '10px 98px',
        textAlign: 'center',
        borderRadius: '0.25rem',
        letterSpacing: 1.2,
        textTransform: 'capitalize',
        transition: '.5s',
        opacity: 0
    }

    const actions = {
        comming: {
            text: 'New Data is coming',
            style: {
                color: '#155724',
                background: '#d4edda',
                opacity: 1
            },
        },
        failled: { 
            text: 'Failled data',
            style: {
                color: '#721c24',
                background: '#f8d7da',
                opacity: 1
            },
        },
    };

    const action = actions[alert];

    useEffect(() => {
        const t = setTimeout(() => {
            console.log('got it!');
            setAlert(null);
        }, 1000)
        return () => {
            clearTimeout(t);
        }
    })

    return <p style={{...style ,...action?.style,  }}>{action?.text}</p>
}

export default Alert
