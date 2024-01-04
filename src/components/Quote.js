import React from 'react';
import '../App.css';
import './Quote.css';

function Quote({ text, color }) {

    let container_classname = "quote-container "
    container_classname += color

    return (
        <>
            <div className={container_classname}>
                <h1>{text}</h1>
            </div>
        </>
    );
}

export default Quote;
