import React, { useState } from 'react';
import './CodeInputContainer.css'; // Import CSS file for styling

const CodeInputContainer = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [validCodeCount, setValidCodeCount] = useState(0);
  const [enteredCodes, setEnteredCodes] = useState([]);
  const [showButtonsContainer, setShowButtonsContainer] = useState(false); // State to control visibility of buttons container
  const [unlockedCodes, setUnlockedCodes] = useState({
    A3F7: false,
    K8G2: false,
    P1R9: false,
    B6T5: false,
    M9W4: false,
    L2D8: false,
    X5S6: false,
    E7H3: false,
    Y4N1: false,
    G6K9: false,
    C3Q8: false,
    R9Z2: false,
    F2P7: false,
    V8J6: false,
    H5M3: false,
    T1E4: false
  });

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleUnlockButtonClick = () => {
    setShowButtonsContainer(true); // Show the buttons container
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const lowerCaseInputValue = inputValue.toLowerCase(); // Convert input to lowercase
      let newMessage = '';
      const codes = {
        a3f7: 'I love how smart you are, always impressing me with your intelligence and your constant new achievements.',
        k8g2: 'I love your sense of humor; you never fail to make me laugh, even on the toughest days.',
        p1r9: 'I love how effortlessly you connect with people, making everyone feel welcomed and appreciated.',
        b6t5: 'I love your beautiful smile; it lights up my world every time I see it.',
        m9w4: 'I love how you deal with hard situations, youre a strong woman',
        l2d8: 'I love your ability to call out bullshit.',
        x5s6: 'I love your kindness, you have a heart of gold.',
        e7h3: 'I love your adventurous spirit, always up for trying new experiences and exploring new places together.',
        y4n1: 'I love your laugh and voice, it cures my retardation.',
        g6k9: 'I love your confidence and self-assurance; you know who you are and aren\'t afraid to be yourself.',
        c3q8: 'I love your thoughtfulness; you always go out of your way to make me feel loved and appreciated.',
        r9z2: 'I love how you support me, i feel like Im a better person because of you',
        f2p7: 'I love how strong you are, facing every challenge without ever backing down.',
        v8j6: 'I love your hugs; they\'re like a comforting drug I can\'t get enough of.',
        h5m3: 'I love the feel of your skin; it\'s so smooth and always comforting to touch.',
        t1e4: 'I love fucking you .'
      };

      if (codes[lowerCaseInputValue]) {
        newMessage = codes[lowerCaseInputValue];
      } else {
        newMessage = 'Invalid code.';
      }

      if (enteredCodes.includes(lowerCaseInputValue)) { // Check if code has already been entered
        newMessage = 'You have already entered this code.';
      } else {
        setMessage(newMessage);
        if (newMessage !== 'Invalid code.' && newMessage !== 'You have already entered this code.') {
          setValidCodeCount(validCodeCount + 1);
          setEnteredCodes([...enteredCodes, lowerCaseInputValue]); // Add entered code to the list
          setUnlockedCodes({ ...unlockedCodes, [lowerCaseInputValue]: true }); // Set the code as unlocked
        }
      }
    }
  };

  const handleExit = () => {
    setShowButtonsContainer(false); // Hide the buttons container
    setMessage('');
  };

  const handleCodeButtonClick = (code) => {
    const lowerCaseCode = code.toLowerCase();
    let newMessage = ''; // Declare newMessage here
    if (unlockedCodes[lowerCaseCode]) {
      switch (lowerCaseCode) {
        case 'a3f7':
          newMessage = 'I love how smart you are, always impressing me with your intelligence and yur constant new achievements.';
          break;
        case 'k8g2':
          newMessage = 'I love your sense of humor; you never fail to make me laugh, even on the toughest days.';
          break;
        case 'p1r9':
          newMessage = 'I love how effortlessly you connect with people, making everyone feel welcomed and appreciated.';
          break;
        case 'b6t5':
          newMessage = 'I love your beautiful smile; it lights up my world every time I see it.';
          break;
        case 'm9w4':
          newMessage = 'I love how you deal with hard situations, youre a strong woman';
          break;
        case 'l2d8':
          newMessage = 'I love your ability to call out bullshit.';
          break;
        case 'x5s6':
          newMessage = 'I love your kindness; you have a heart of gold.';
          break;
        case 'e7h3':
          newMessage = 'I love your adventurous spirit, always up for trying new experiences and exploring new places together.';
          break;
        case 'y4n1':
          newMessage = 'I love your laugh and voice, it cures my retardation.';
          break;
        case 'g6k9':
          newMessage = 'I love your confidence and self-assurance; you know who you are and aren\'t afraid to be yourself.';
          break;
        case 'c3q8':
          newMessage = 'I love your thoughtfulness; you always go out of your way to make me feel loved and appreciated.';
          break;
        case 'r9z2':
          newMessage = 'I love how you support me, i feel like Im a better person because of you';
          break;
        case 'f2p7':
          newMessage = 'I love how strong you are, facing every challenge without ever backing down.';
          break;
        case 'v8j6':
          newMessage = 'I love your hugs; they\'re like a comforting drug I can\'t get enough of.';
          break;
        case 'h5m3':
          newMessage = 'I love the feel of your skin; it\'s so smooth and always comforting to touch.';
          break;
        case 't1e4':
          newMessage = 'I love fucking you';
          break;
        default:
          newMessage = 'No message available.';
      }
    } else {
      newMessage = `Code has not been unlocked yet.`;
    }
    setMessage(newMessage);
  };
  
  
  return (
    <div className="code-input-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter code"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          className="input-field"
        />
        {message && (
          <div className="message-container">
            <p className="message">{message}</p>
            <button className="exit-button" onClick={handleExit}>X</button>
          </div>
        )}
      </div>
      {validCodeCount > 0 && (
        <div className="heart-counter-container">
          <span role="img" aria-label="heart" className="heart-icon">❤️</span>
          <span className="counter">{validCodeCount}</span>
        </div>
      )}
      {!showButtonsContainer && ( // Render unlock button only if buttons container is not shown
        <button className="unlock-button" onClick={handleUnlockButtonClick}>Unlocked Codes</button>
      )}
      {showButtonsContainer && ( // Render buttons container only if it's shown
        <div className="code-buttons-container">
          {['A3F7', 'K8G2', 'P1R9', 'B6T5', 'M9W4', 'L2D8', 'X5S6', 'E7H3', 'Y4N1', 'G6K9', 'C3Q8', 'R9Z2', 'F2P7', 'V8J6', 'H5M3', 'T1E4'].map(code => (
            <button
              key={code}
              onClick={() => handleCodeButtonClick(code)}
              style={{ backgroundColor: unlockedCodes[code.toLowerCase()] ? 'yellow' : 'pink' }}
            >
              {code}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CodeInputContainer;
