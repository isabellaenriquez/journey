import React, { useState, useRef } from 'react';
import './DiaryPage.css';
import firebase from './Firebase.js';

function DiaryPage(props){

    const date = "November 7th";
    const entry = useRef("");

    function addEntry(event) {
        console.log(entry.current.value);
        const db = firebase.firestore();
        db.settings({
            timestampInSnapshots: true
        });
        const userRef = db.collection("users").doc(date).set({
            date: "November 7th",
            entry: entry.current.value,
            magnitude: 1,
            mood: 1
        });
    };

    return (
        <div className="DiaryPage">
            <header className="title">How you feeling?</header>
            <p className="date">{date}</p>
            <textarea className="entry" ref={entry} placeholder="Placeholder" />
            <button className="addButton" onClick={addEntry}>Add Entry</button>
        </div>
    );
}

export default DiaryPage;
