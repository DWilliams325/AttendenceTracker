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
      gap: '2rem',
      position: 'fixed',
      bottom: '20px',
      left: 0,
      right: 0,
      textAlign: 'center',
    }}>
      {Object.entries(counts).map(([label, count]) => (
        <div key={label}>
          <strong>{label}</strong>
          <div
            style={{
              backgroundColor: '#f4f4f4',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              lineHeight: '40px',
              marginTop: '0.3rem',
              fontSize: '1.2rem',
              fontWeight: 'bold',
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
