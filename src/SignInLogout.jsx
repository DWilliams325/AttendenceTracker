import React from 'react';

const SignInLogout = () => {
  return (
    <button
      style={{
        position: 'fixed',           // ← CHANGE THIS from absolute to fixed
        top: '20px',
        right: '20px',
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer',
        zIndex: 9999,                // ← Ensures it's on top
      }}
    >
      Sign In / Logout
    </button>
  );
};

export default SignInLogout;
