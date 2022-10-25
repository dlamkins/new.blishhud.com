import React from 'react';

export default function HumanDate({ timestamp, classes }) {
    var date = new Date(timestamp);
    
    return (
        <p className={ classes } data-hint={ date.toLocaleString() }>{ date.toLocaleDateString() }</p>
    );
}