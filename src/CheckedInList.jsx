// src/components/CheckedInList.jsx
import React from 'react';

export default function CheckedInList({ kids }) {
  const checkedInKids = kids.filter(kid => kid.checkedIn);

  return (
    <div style={{
      padding: '1rem',
      border: '1px solid #4caf50',
      margin: '1rem auto',
      maxWidth: '300px',
      background: '#e8f5e9',
      borderRadius: '8px'
    }}>
      <h3 style={{ textAlign: 'center', color: '#2e7d32' }}>Checked-In Today</h3>
      {checkedInKids.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No students checked in yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {checkedInKids.map((kid, index) => (
            <li key={index}>
              {kid.firstName} {kid.lastName} (Grade {kid.grade})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
