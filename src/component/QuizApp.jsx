import React, { useState } from "react";
import "../component/quizstyle.css";

const QuizApp = () => {
  const Questionbook = [
    {
      Question: "what is the  capital city of pakistan?",
      AnswerQues: [
        { Answer: "islamabad", isCorrect: true },
        { Answer: "Karachi", isCorrect: false },
        { Answer: "lahore", isCorrect: false },
        { Answer: "hyderabad", isCorrect: false },
      ],
    },
    {
      Question: "who is the PM of pakistan?",
      AnswerQues: [
        { Answer: "imran khan", isCorrect: false },
        { Answer: "shehbaz shareef", isCorrect: true },
        { Answer: "nawaz shareef", isCorrect: false },
        { Answer: " benazir bhutto", isCorrect: false },
      ],
    },
    {
      Question: "2+6 -5 =?",
      AnswerQues: [
        { Answer: "3", isCorrect: true },
        { Answer: "4", isCorrect: false },
        { Answer: "1", isCorrect: false },
        { Answer: "5", isCorrect: false },
      ],
    },
    {
      Question: " what is the national car of pakistan?",
      AnswerQues: [
        { Answer: "mehran", isCorrect: true },
        { Answer: "Alto", isCorrect: false },
        { Answer: "civic", isCorrect: false },
        { Answer: "toyota", isCorrect: false },
      ],
    },
    {
      Question: "what is the best SmartPhone in paksitan?",
      AnswerQues: [
        { Answer: "samsung", isCorrect: false },
        { Answer: "iphone", isCorrect: true },
        { Answer: "infinix", isCorrect: false },
        { Answer: "motrola", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbook.length) {
      setcurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setcurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {showScore ? (
        <>
        <div className="score-section">
          <h5>
            you have a scored{" "}
            <b className="bold">
              {score} out of {Questionbook.length}
            </b>
          </h5>
        </div>
          <>
            <button className="transparent" type="submit" onClick={resetQuiz}>
              Play Again!
            </button>
          </>
        </>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>{currentQuestion + 1}</span>/{Questionbook.length}
            </div>
            <div className="question-text">
              {Questionbook[currentQuestion].Question}
            </div>
          </div>
          <div className="answer-section">
            {Questionbook[currentQuestion].AnswerQues.map((answer) => {
              return (
                <button
                  className="transparent"
                  onClick={() => handleClick(answer.isCorrect)}
                >
                  {answer.Answer}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizApp;
