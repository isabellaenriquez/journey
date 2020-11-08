import React, { useState, useEffect } from 'react';
import './App.css';
import firebase, { getAll } from './components/Firebase.js';
import Graph from './components/Graph';
import DiaryPage from './components/DiaryPage';
import DiaryEntry from './components/DiaryEntry';
import Suggestions from './components/Suggestions';
import Exercises from './components/Exercises.jsx';

function App() {
  const [entries, setEntries] = useState([]);
  const [exercisesActive, setExercisesActive] = useState(false);

  function updateEntries() {
    getAll(db)
      .then((response) => {
        response.reverse();
        console.log(response);
        setEntries(response);
        setExercisesActive(true);
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
        response.reverse();
        console.log(response);
        setEntries(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [db])

  function onExerciseFinish() {
    setExercisesActive(false);
    document.getElementById("suggestions").scrollIntoView({behavior: "smooth"});
  }

  return (
    <div className="App">
      <div className="main">
        { (entries.length > 0) &&
          <Exercises open={exercisesActive} onClose={onExerciseFinish}></Exercises>
        }
        <div className="left-side">
          <div className="left-side-content">
            <DiaryPage onNewEntry={updateEntries}></DiaryPage>
            <Graph entries={entries}></Graph>
            {(entries.length > 0) &&
              <Suggestions score={entries[0].mood}></Suggestions>
            }
          </div>
        </div>
        <div className="right-side">
          {(entries.length > 0) &&
            entries.map((entry) => (<DiaryEntry key={entry.day + "/" + (entry.month + 1) + "/" + entry.year} day={entry.day} month={entry.month} year={entry.year} entry={entry.entry} mood={entry.mood} magnitude={entry.magnitude}></DiaryEntry>))
          }
        </div>
      </div>
      <div className="banner">
        J o u r n e y
      </div>
    </div>

  );
}

export default App;
