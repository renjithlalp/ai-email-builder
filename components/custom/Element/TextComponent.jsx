import React from 'react';

function TextComponent({ style = {}, content = "Sample Text" }) {
  return (
    <div style={{ backgroundColor: style.backgroundColor || 'transparent' }}>
      <h2 style={style}>{content}</h2>
    </div>
  );
}

export default TextComponent;
