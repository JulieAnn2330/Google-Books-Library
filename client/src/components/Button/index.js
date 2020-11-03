import React from "react";
import './button.css'

function Button({ onClick, children }) {
    return (
        <button onClick={onClick} className="button">
            {children}
        </button>
    );
}

export default Button