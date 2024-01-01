import React from 'react';

export default function HumanDate({ timestamp, classes }) {
    if (timestamp == "0001-01-01T00:00:00") {
        // None tracked
        return (
            <p className={ classes }>Unknown</p>
        )
    }

    var date = new Date(timestamp);
    
    return (
        <p className={ classes } data-hint={ date.toLocaleString() }>{ date.toLocaleDateString() }</p>
    );
}