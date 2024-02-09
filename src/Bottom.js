import React, { useState, useEffect } from 'react';

const Bottom = ({ unlockedMessages }) => {
  const [showRewards, setShowRewards] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (unlockedMessages >= 2) {
      setShowRewards(true);
    } else {
      setShowRewards(false);
    }
  }, [unlockedMessages]);

  const handleScroll = (direction) => {
    const container = document.getElementById('rewards-container');
    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= 200; // Adjust scroll distance as needed
      } else if (direction === 'right') {
        container.scrollLeft += 200; // Adjust scroll distance as needed
      }
    }
  };

  return (
    <div className="bottom-container">
      {showRewards && (
        <div className="rewards-container" id="rewards-container">
          {unlockedMessages.map((message, index) => (
            <div key={index} className="reward-item">
              {message}
            </div>
          ))}
        </div>
      )}
      {showRewards && (
        <div className="scroll-buttons">
          <button onClick={() => handleScroll('left')}>←</button>
          <button onClick={() => handleScroll('right')}>→</button>
        </div>
      )}
    </div>
  );
};

export default Bottom;
