// src/components/GradeLevelSummary.jsx
import React from 'react';

const gradeRanges = {
  'Pre-K': (grade) => grade.toLowerCase() === 'pre-k',
  'K–1st': (grade) => ['k', '1', '1st'].includes(grade.toLowerCase()),
  '2nd–4th': (grade) => ['2', '2nd', '3', '3rd', '4', '4th'].includes(grade.toLowerCase()),
  '5th–8th': (grade) => ['5', '5th', '6', '6th', '7', '7th', '8', '8th'].includes(grade.toLowerCase()),
};

function GradeLevelSummary({ kids }) {
  const counts = {
    'Pre-K': 0,
    'K–1st': 0,
    '2nd–4th': 0,
    '5th–8th': 0,
  };

  kids.forEach(kid => {
    if (!kid.checkedIn) return;
    for (const range in gradeRanges) {
      if (gradeRanges[range](kid.grade)) {
        counts[range]++;
        break;
      }
    }
  });

  return (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    position: 'fixed',
    bottom: '20px',
    left: 0,
    right: 0,
    padding: '0.75rem',
    backgroundColor: 'transparent', // removes the light background
    borderTop: 'none',              // removes the line
  }}>

      {Object.entries(counts).map(([label, count]) => (
        <div key={label} style={{ textAlign: 'center' }}>
          <div style={{
            fontWeight: 'bold',
            fontSize: '0.85rem',
            marginBottom: '0.25rem',
            color: '#0af'          //grade text color
          }}>
            {label}
          </div>
          <div
  style={{
    backgroundColor: '#111',       // dark bubble like button
    color: '#0af',                 // same blue text as button
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    lineHeight: '48px',
    fontSize: '1rem',
    fontWeight: 'bold',
    margin: '0 auto',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  }}
>
  {count}
</div>

        </div>
      ))}
    </div>
  );
}

export default GradeLevelSummary;
