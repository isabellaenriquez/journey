import React from 'react';
import {convertToColour} from '../ColourConversion';
import './DiaryEntry.css';

function DiaryEntry(props){
    let entrySyle = {
        backgroundColor: convertToColour (props.mood)
    }

    function getMonthName(month) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[month-1];
    }

    return (
        <div className="DiaryEntry" style = {entrySyle}>  
            <h3 className="date">{props.day + " " + getMonthName(props.month) + " " + props.year}</h3>
            <p className="entryText">{props.entry}</p>
            <h3 className="score">Mood: {props.mood.toFixed(2)}</h3>
        </div>
    );
}

export default DiaryEntry;
