
import React from 'react';

const Button = ({value, className})  => (
    <button className={className}>
        <span>{value}</span>
    </button>
);

export default Button;