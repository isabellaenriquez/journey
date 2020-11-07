import React, { useState, useRef } from 'react';
import './DiaryPage.css';

function DiaryPage(props){

    const entry = useRef("");

    function addEntry(event) {
        console.log(entry.current.value);
    }

    return (
        <div className="DiaryPage">
            <header className="title">How you feeling?</header>
            <p className="date">November 7th, 2020</p>
            <textarea className="entry" ref={entry} placeholder="Placeholder" />
            <button className="addButton" onClick={addEntry}>Add Entry</button>
        </div>
    );
}

export default DiaryPage;
