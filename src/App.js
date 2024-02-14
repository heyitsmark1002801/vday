import React, { useState, useEffect } from 'react';
import './App.css';
import backgroundImage from './33049-113110.png'; // Import the background image
import CodeInputContainer from './CodeInput';
import Bottom from './Bottom';
import LoadingScreen from './LoadingScreen';
const quizData = [
  {
    question: "Name of convention we went to before ROM ?",
    image: "RC.jpeg", // Add an image for the question
    choices: [ "Toronto Comic Book Convention", "Toronto Comic Arts Festival","Toronto Arts and Comics Convention", "Zachs Comic Book Awards"], // Add multiple choices
    answer: "Toronto Comic Arts Festival",
    hintImage: "./1.jpeg",
    x: 29700,
    y: 43000
  },

  {
    question: "I played the _____ in my kindergarden play?",
    image:"LilP.jpeg",
    answer: "Prince",
    hintImage: "./2.jpeg",
    x: 19400,
    y: 68000
  },

  {
    question: "Where was this photo taken?",
    image:"Trippy.jpeg",
    answer: "Conor maynard concert",
    hintImage: "./3.jpeg",
    x: 3200,
    y: 68000
  },
  {
    question: "Name of Nicks Character for Halloween (Alliteration)?",
    image:"Hal.jpeg",
    answer: "Vincent Vega",
    hintImage: "./4.jpeg",
    x: 3800,
    y: 61000
  },
  {
    question: "What did you drink out of in this photo?",
    image: "KKEA.jpeg",
    answer: "Seashell",
    hintImage: "./5.jpeg",
    x: 6500,
    y: 52000
  },
  {
    question: "Name of the person on the left?",
    image: "Stella.jpeg",
    answer: "Stella",
    hintImage: "./6.jpeg",
    x: 12000,
    y: 50000
  },
  {
    question: "How many tattoos do I have?",
    image: "2.jpg",
    answer: "11",
    hintImage: "./7.jpeg",
  
    x: 13500,
    y: 40000
  },
  // question aight multiple choice 
  {
    question: "What is this character's name?",
    image: "cg.jpg", // Add an image for the question
    choices: [ "Aлигатор Женя", "Крикодил Петя","Kрокодил Гена", "Волк"], // Add multiple choices
    answer: "Kрокодил Гена",
    hintImage: "./8.jpeg", // Add an image as a hint
    x: 19990,
    y: 55999
  },
  
{
    question: "This persons full name?",
    image: "Mia.jpeg",
    answer: "Mia Ester Grinberg Lipkin",
    hintImage: "./9.jpeg",
    x: 23500,
    y: 70000
  },
  {
    question: "Jewish Holiday where you dress up in a costume?",
    image: "PP.jpeg",
    answer: "Purim",
    hintImage: "./10.jpeg",
    x: 24500,
    y: 62000
  },
  {
    question: "What Millitary Battalion did I serve in?",
    image: "ar.jpeg",
    choices: [ "405", "404","403", "Artillery"],
    answer: "405",
    hintImage: "./11.jpeg",
    x: 25200,
    y: 54500
  },
  {
    question: "What is my favorite rock band",
    image:"gh.jpeg",
    answer: "City Morgue",
    hintImage: "./12.jpeg",
    x: 24200,
    y: 52000
  },
  {
    question: "What animal were you excited to see on our drive to the Dead Sea?",
    image:"is.jpeg",
    answer: "Camels",
    hintImage: "./13.jpeg",
    x: 27500,
    y: 55000
  },
  // Add more buttons as needed
  {
    question: "In Jafa we saw 4 Giant snowglobes, which item was not in one?",
    image:"JerS.jpeg",
    choices: ["Sailboat", "Lighthouse", "Deer", "Menorah"],
    answer: "Menorah",
    hintImage: "./14.jpeg",
    x: 27500,
    y: 50000
  },
  {
    question: "What vegetable did we have at Christmas Winter Market?",
    image: "WinM.jpeg",
    answer: "Potatoes",
    hintImage: "./15.jpeg",
    x: 23500,
    y: 48000
  },
  {
    question: "How many countries have we Kaayaked in?",
    image: "VC.jpeg",
    answer: "3",
    hintImage: "./16.jpeg",
    x: 21000,
    y: 40000
  },
  // Add more questions here...
];

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [hintText, setHintText] = useState('');
  const [hintImage, setHintImage] = useState('');
  const [answeredCorrectly, setAnsweredCorrectly] = useState(Array(quizData.length).fill(false));
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cooldown, setCooldown] = useState(Array(quizData.length).fill(false));
  const [unlockedMessages, setUnlockedMessages] = useState([]);
  const [loading, setLoading] = useState(true)

  const handleUnlockMessage = (message) => {
    setUnlockedMessages([...unlockedMessages, message]);
  };
  const [validCodeCount, setValidCodeCount] = useState(0);

  const handleValidCodeCountChange = (count) => {
    setValidCodeCount(count);
  };
 // Track cooldown for each question
 useEffect(() => {
  setTimeout(() => setLoading(false), 8000)
}, [])

  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const handleButtonClick = (index) => {
    if (answeredCorrectly[index]) {
      setHintText(quizData[index].hint);
      setHintImage(quizData[index].hintImage);
      setShowHint(true);
    } else {
      setCurrentQuestionIndex(index);
      setShowHint(false);
    }
  };

  const checkAnswer = (selectedAnswer) => {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setHintText(currentQuestion.hint);
      setHintImage(currentQuestion.hintImage); // Set the hint image
      setShowHint(true);
      setAnsweredCorrectly((prev) => {
        const newAnswers = [...prev];
        newAnswers[currentQuestionIndex] = true;
        return newAnswers;
      });
    } else {
      setShowHint(false);
      setHintText('');
      alert('Incorrect answer. Try again!');
      
  };}
  
  const exitQuiz = () => {
    setCurrentQuestionIndex(null);
    setShowHint(false);
  };

  return (
    
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh' }}>
    <div className="map-container" style={{ position: 'relative', width: '100%', height: '100%' }}>
        {quizData.map((item, index) => (
          <button
            key={index}
            className="map-button"
            style={{ position: 'absolute', left: `${(item.x / 33049) * 100}%`, top: `${(item.y / 113110) * 100}%` }}
            onClick={() => handleButtonClick(index)}
            disabled={cooldown[index]} // Disable button during cooldown
          >
             {index + 1}
          </button>
        ))}
         {currentQuestionIndex !== null && !showHint && (
          <div className="quiz-container">
            <button className="exit-button" onClick={exitQuiz}>X</button> {/* Exit button */}
            <img 
              src={process.env.PUBLIC_URL + '/' + quizData[currentQuestionIndex].image} 
              style={{ width: '280px', height: '410px' }} // Adjust the width as needed
            /> 
            <h3>{quizData[currentQuestionIndex].question}</h3>
            {quizData[currentQuestionIndex].choices && ( // Check if choices exist
              <div className="choices">
                {/* Render multiple choice options */}
                {quizData[currentQuestionIndex].choices.map((choice, index) => (
                  <button key={index} onClick={() => checkAnswer(choice)}>
                    {choice}
                  </button>
                ))}
              </div>
            )}
            {!quizData[currentQuestionIndex].choices && ( // If no choices, render text input
              <div>
                <input type="text" placeholder="Your Answer" />
                <button onClick={() => checkAnswer(document.querySelector('input').value)}>Submit</button>
              </div>
            )}
          </div>
        )}
        {showHint && (
          <div className="hint-container">
            <button className="exit-button" onClick={exitQuiz}>X</button> {/* Exit button */}
            <div className="hint-content">
              <img 
                src={process.env.PUBLIC_URL + '/' + hintImage} 
                alt="Hint" 
                style={{ width: '300px', height: 'auto' }} // Adjust the width as needed
              /> 
              <p>{hintText}</p>
            </div>
          </div>
        )}
      </div>
      <>
      {loading && <LoadingScreen />}
      {/* Rest of your component's content */}
    </>
      <CodeInputContainer onValidCodeCountChange={handleValidCodeCountChange} />
      <Bottom validCodeCount={validCodeCount} />
    </div>
      
  );
};

export default App;
