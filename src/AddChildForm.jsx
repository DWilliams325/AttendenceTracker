import React, { useState } from 'react';

function AddChildForm({ onAddChild }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !grade) return;

    onAddChild({
      firstName,
      lastName,
      grade,
      checkedIn: false,
      checkedOut: false,
    });

    setFirstName('');
    setLastName('');
    setGrade('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        background: '#f0f0f0',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        zIndex: 1000,
      }}
    >
      <h3>Add Child</h3>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={{ marginBottom: '8px', display: 'block', width: '100%' }}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={{ marginBottom: '8px', display: 'block', width: '100%' }}
      />
      <input
        type="text"
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        style={{ marginBottom: '8px', display: 'block', width: '100%' }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddChildForm;
