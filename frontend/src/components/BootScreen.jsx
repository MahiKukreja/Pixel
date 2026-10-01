import React, { useState, useEffect } from 'react';

const BootScreen = ({ onBootComplete }) => {
  const [bootProgress, setBootProgress] = useState(0);
  const [bootText, setBootText] = useState('Initializing...');

  useEffect(() => {
    const bootSequence = [
      { progress: 0, text: 'Initializing Content OS...' },
      { progress: 20, text: 'Loading Engagement Metrics...' },
      { progress: 40, text: 'Compiling Reel Analytics...' },
      { progress: 60, text: 'Testing Hooks...' },
      { progress: 80, text: 'Scaling Reach...' },
      { progress: 100, text: 'Welcome!' }
    ];

    let currentStep = 0;

    const bootInterval = setInterval(() => {
      if (currentStep < bootSequence.length) {
        setBootProgress(bootSequence[currentStep].progress);
        setBootText(bootSequence[currentStep].text);
        currentStep++;
      } else {
        clearInterval(bootInterval);
        setTimeout(() => {
          onBootComplete();
        }, 500);
      }
    }, 600);

    return () => clearInterval(bootInterval);
  }, [onBootComplete]);

  return (
    <div className="boot-screen">
      <div className="boot-content">
        <div className="boot-logo">🍎</div>
        <h1 className="boot-title">Content OS</h1>
        <div className="boot-progress-container">
          <div 
            className="boot-progress-bar"
            style={{ width: `${bootProgress}%` }}
          />
        </div>
        <p className="boot-text">{bootText}</p>
      </div>
    </div>
  );
};

export default BootScreen;
