import React from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';
import './Button.css';

function Button({ text, link }) {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `${link}`;

        if (path.substring(0, 4) === "http" || path.substring(0, 6) === "mailto")
        {
            window.location.href = path;
            return null;
        }

        navigate(path);
    }

    return (
        <>
            <div className="button-container ">
                <button onClick={routeChange}>{text}</button> 
            </div>
        </>
    );
}

export default Button;
