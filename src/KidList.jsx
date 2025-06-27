// KidList.jsx
import React, { useState } from 'react';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';

export default function KidList({ kids }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredKids = kids.filter(kid =>
    `${kid.firstName} ${kid.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckIn = async (kid) => {
    const ref = doc(db, "kids", kid.id);
    await updateDoc(ref, { checkedIn: true, checkedOut: false });
  };

  const handleCheckOut = async (kid) => {
    const ref = doc(db, "kids", kid.id);
    await updateDoc(ref, { checkedIn: false, checkedOut: true });
  };

  const handleDelete = async (kid) => {
    const ref = doc(db, "kids", kid.id);
    await deleteDoc(ref);
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', width: '250px' }}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredKids.map((kid) => (
          <li key={kid.id} style={{ marginBottom: '0.5rem' }}>
            <span>{kid.firstName} {kid.lastName} - Grade {kid.grade}</span>
            <div style={{ marginTop: '0.3rem' }}>
              <button onClick={() => handleCheckIn(kid)} disabled={kid.checkedIn}>
                Check In
              </button>
              <button onClick={() => handleCheckOut(kid)} disabled={!kid.checkedIn}>
                Check Out
              </button>
              <button onClick={() => handleDelete(kid)} style={{ marginLeft: '5px', color: 'red' }}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
