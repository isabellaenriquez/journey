import React from 'react';
import Popup from 'reactjs-popup';
import {convertToColour} from '../ColourConversion';
import './DiaryEntry.css';
import logo from '../images/journey-logo.png';

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
        <Popup
            trigger={
                <div className="DiaryEntry" style = {entrySyle}>  
                    <h3 className="date">{props.day + " " + getMonthName(props.month) + " " + props.year}</h3>
                    <p className="entryText">{props.entry}</p>
                    <h3 className="score">Mood: {props.mood.toFixed(2) * 10}</h3>
                    <input type="range" min="-10" max="10" value={props.mood.toFixed(2) * 10} className="mood-slider"></input>
                </div>
            }
            modal
        >
            <div className="modal" style={{backgroundColor: convertToColour(props.mood)}}>
            <div className="logo-div">
                <img className="logo" src={logo}></img>
                  </div>
                <div className="header">{props.day + " " + getMonthName(props.month) + " " + props.year}</div>
                <p className="content">
                    {props.entry}
                </p>
                <h3 className="popup-score">Mood: {props.mood.toFixed(2) * 10}</h3>
                <input type="range" min="-10" max="10" value={props.mood.toFixed(2) * 10} className="popup-mood-slider"></input>
            </div>
        </Popup>
    );
}

export default DiaryEntry;
