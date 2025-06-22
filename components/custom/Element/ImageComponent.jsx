import React from 'react';

function ImageComponent({ style, imageUrl, alt, outerStyle }) {
  return (
    <div style={outerStyle}>
      <img src={imageUrl} alt={alt || 'image'} style={style} />
    </div>
  );
}

export default ImageComponent;
