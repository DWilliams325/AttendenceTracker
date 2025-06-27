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
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px 20px',
          fontSize: '1rem'
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
