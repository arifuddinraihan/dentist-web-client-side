import React from 'react';

const PrimaryButton = ({ children, classes, handler }) => {
    return (
        <button
            onClick={handler}
            className={`btn border-0 hover:text-gray-100 bg-gradient-to-r from-primary to-secondary text-white ${classes}`}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;