import React from 'react';

function LogoComponent({ style, imageUrl }) {
  return (
    <div style={style}>
      <img
        src={imageUrl || '/default-logo.png'} // fallback default logo
        alt="Logo"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
}

export default LogoComponent;
