import React from 'react';
import {convertToColour} from '../ColourConversion';
import './DiaryEntry.css';

function DiaryEntry(props){
    let entrySyle = {
        backgroundColor: convertToColour (props.mood)
    }
    return (
        <div className="DiaryEntry" style = {entrySyle}> 
            <h2 className="date">{props.date}</h2>
            <h3 className="entry">Your Diary Entry: </h3>
            <p className="entryText">{props.entry}</p>
            <h3 className="score">Today's Mood: </h3>
            <p className="scoreText">{props.mood}</p>
            <h3 className="magnitude">Today's Magnitude:</h3>
            <p className="magnitudeText">{props.magnitude}</p>
        </div>
    );
}

export default DiaryEntry;
