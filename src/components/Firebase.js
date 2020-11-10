import firebase from "firebase";
import { firebaseConfig } from './firebaseConfig.json';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export async function getEntry(db, entryName) {
  const entriesRef = db.collection('users');
  const doc = await entriesRef.doc(entryName).get();
  console.log(doc.data());
}

export async function getAll(db) {
  const entriesRef = db.collection('users');
  const snapshot = await entriesRef.get();
  const entries = [];
  snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
      entries.push(doc.data());
  });
  return entries.filter((entry) => entry.mood !== undefined);
}

export default firebase;