import React from 'react';
import { assetUrl } from '../lib/assetUrl';

const PixelGirl = ({ onClick }) => {
  return (
    <div className="pixel-girl-container" onClick={onClick} data-testid="pixel-girl-btn">
      <div className="pixel-girl">
        <img 
          src={assetUrl('/assets/pixel-girl.png')} 
          alt="Mahi - Click to learn more" 
          className="pixel-girl-image"
        />
      </div>
    </div>
  );
};

export default PixelGirl;
