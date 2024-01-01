import React from 'react';
import '../App.css';
import './Spacer.css';

function Spacer({ color }) {

    let container_classname = "spacer-container "
    container_classname += color

    return (
        <>
            <div className={container_classname} />
        </>
    );
}

export default Spacer;
