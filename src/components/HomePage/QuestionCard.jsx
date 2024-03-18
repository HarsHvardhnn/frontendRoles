import React, { useState } from "react";

const QuestionCard = ({ question, selectedOption }) => {
  const [answer, setAnswer] = useState("");

  const setAns = (event) => {
    const selectedAnswer = event.target.value;
    setAnswer(selectedAnswer);
    selectedOption(selectedAnswer);
  };

  return (
    <div className="flex flex-col items-center">
      <p>{question}</p>
      <div className="flex items-center">
        <label>
          <input
            type="radio"
            value="agree"
            checked={answer === "agree"}
            onChange={setAns}
          />
          Agree
        </label>
        <label>
          <input
            type="radio"
            value="disagree"
            checked={answer === "disagree"}
            onChange={setAns}
          />
          Disagree
        </label>
        <label>
          <input
            type="radio"
            value="neutral"
            checked={answer === "neutral"}
            onChange={setAns}
          />
          Neutral
        </label>
      </div>
    </div>
  );
};

export default QuestionCard;
