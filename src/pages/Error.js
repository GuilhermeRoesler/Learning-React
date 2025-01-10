import React from 'react'

const Error = (props) => {
    return (
        <div className='Error'>
            <img src='/logo192.png' alt='logo' />
            <h1>React encountered an error</h1>
            <p>{props.error}</p>
        </div>
    )
}

export default Error;