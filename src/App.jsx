// src/App.jsx
import React, { useEffect, useState } from 'react';
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase.jsx";

import KidList from './KidList';
import ActionButtons from './ActionButtons';
//import SignInLogout from './SignInLogout';
import AddChildForm from './AddChildForm';
import GradeLevelSummary from './GradeLevelSummary';
import CheckedInList from './CheckedInList';

function App() {
  const [kids, setKids] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  // Realtime sync from Firebase
useEffect(() => {
  const unsubscribe = onSnapshot(collection(db, "kids"), (snapshot) => {
    const kidData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Sort by last name, then first name
    kidData.sort((a, b) => {
      const lastA = a.lastName?.toLowerCase() || '';
      const lastB = b.lastName?.toLowerCase() || '';
      const firstA = a.firstName?.toLowerCase() || '';
      const firstB = b.firstName?.toLowerCase() || '';

      if (lastA !== lastB) return lastA.localeCompare(lastB);
      return firstA.localeCompare(firstB);
    });

    setKids(kidData);
  });

  return () => unsubscribe();
}, []);


  // Add new kid to Firebase
  const addKid = async (newKid) => {
    try {
      await addDoc(collection(db, "kids"), newKid);
    } catch (error) {
      console.error("Error adding kid:", error);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      padding: '20px',
      boxSizing: 'border-box',
      position: 'relative',
    }}>
      <KidList kids={kids} />
      <ActionButtons />
      <CheckedInList kids={kids} />
      <GradeLevelSummary kids={kids} />

    <button 
  onClick={() => setShowPopup(true)}
  style={{
    margin: '1.5rem auto',
    padding: '12px 24px',
    fontSize: '1rem',
    backgroundColor: '#111',
    color: '#0af',
    border: 'none',
    borderRadius: '8px',
    width: 'fit-content'
  }}
>
  Add Child
</button>


      {showPopup && (
        <AddChildForm 
          onClose={() => setShowPopup(false)} 
          onAddChild={addKid} 
        />
      )}
    </div>
  );
}

export default App;
