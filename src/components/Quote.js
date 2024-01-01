import React from 'react';
import '../App.css';
import './Quote.css';

function Quote({ text }) {
    return (
        <div className="quote-container">
            <h1 className="quote-text">{text}</h1>
        </div>
    );
}

export default Quote;