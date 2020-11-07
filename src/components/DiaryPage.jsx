import React, { useState, useRef } from 'react';
import './DiaryPage.css';
import firebase from './Firebase.js';

const axios = require('axios');

function DiaryPage(props){
    const entry = useRef("");
    const date = useRef("");

    function addEntry(event) {
        console.log(entry.current.value);

        const dateObj = new Date(date.current.value);

        const db = firebase.firestore();

        db.settings({
            timestampInSnapshots: true
        });

        axios.post("/api/sendEntry", {
            text: entry.current.value
        })
        .then((response) => {
            console.log(response.data);
            const data = {
                day: dateObj.getDate(),
                month: dateObj.getMonth() + 1,
                year: dateObj.getFullYear(),
                entry: entry.current.value,
                magnitude: response.data.documentSentiment.magnitude,
                mood: response.data.documentSentiment.score
            };
            const userRef = db.collection("users").doc(date.current.value).set(data);
            props.onNewEntry(data);
        })
        .catch((error) => {
            console.log(error);
        })
    };

    return (
        <div className="DiaryPage">
            <header className="title">How you feeling?</header>
            <input type="date" ref={date}></input>
            <textarea className="entry" ref={entry} placeholder="Placeholder" />
            <button className="addButton" onClick={addEntry}>Add Entry</button>
        </div>
    );
}

export default DiaryPage;
