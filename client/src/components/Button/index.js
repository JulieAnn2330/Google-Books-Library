import React from "react";

function Button({ onClick, children }) {
    return (
        <button onClick={onClick} className="btn btn-warning">
            {children}
        </button>
    );
}

export default Button