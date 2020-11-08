import React, { useState, useEffect } from 'react';
import './App.css';
import firebase, { getAll } from './components/Firebase.js';
import Graph from './components/Graph';
import DiaryPage from './components/DiaryPage';
import DiaryEntry from './components/DiaryEntry';
import Suggestions from './components/Suggestions';

function App() {
  const [entries, setEntries] = useState([]);

  function updateEntries() {
    getAll(db)
    .then((response) => {
      console.log(response);
      setEntries(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const db = firebase.firestore();

  db.settings({
      timestampInSnapshots: true
  });

  useEffect(() => {
    getAll(db)
    .then((response) => {
      console.log(response);
      setEntries(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [db])

  return (
    <div className="main">
      <div className="left-side">
        <DiaryPage onNewEntry={updateEntries}></DiaryPage>
        <Graph entries={entries}></Graph>
        { (entries.length > 0) &&
          <Suggestions score={entries[0].mood}></Suggestions>
        }
      </div>
      <div className="right-side">
        { (entries.length > 0) &&
          entries.map((entry) => (<DiaryEntry key={entry.day + "/" + (entry.month+1) + "/" + entry.year} day={entry.day} month={entry.month} year={entry.year} entry={entry.entry} mood={entry.mood} magnitude={entry.magnitude}></DiaryEntry>))
        }
      </div>
    </div>
  );
}

export default App;
