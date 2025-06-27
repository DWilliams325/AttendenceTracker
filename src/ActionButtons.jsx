import React from 'react';

function ActionButtons() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '40px' }}>
      <button style={{ margin: '5px', padding: '10px' }}>Check In</button>
      <button style={{ margin: '5px', padding: '10px' }}>Check Out</button>
      <button style={{ margin: '5px', padding: '10px' }}>Scan QR</button>
    </div>
  );
}

export default ActionButtons;
