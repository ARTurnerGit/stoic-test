import React, { useState } from "react";
import PropTypes from "prop-types";

import ToggleChoice from "./ToggleChoice";
import "./Toggles.css";

function generateDisplayAnswers(answers) {
  return answers.map((a) => ({ ...a, currentChoiceIndex: 1 }));
}

function Toggles({ question, answers }) {
  const [displayAnswers, setDisplayAnswers] = useState(
    generateDisplayAnswers(answers)
  );

  const handleChange = (stateIndex) => (currentChoiceIndex) => {
    const precedingAnswers = displayAnswers.slice(0, stateIndex);
    const followingAnswers = displayAnswers.slice(stateIndex + 1);
    const changedAnswer = { ...displayAnswers[stateIndex], currentChoiceIndex };
    setDisplayAnswers([
      ...precedingAnswers,
      changedAnswer,
      ...followingAnswers,
    ]);
  };

  const answersAreCorrect = displayAnswers.every(
    ({ correctChoiceIndex, currentChoiceIndex }) =>
      currentChoiceIndex === correctChoiceIndex
  );

  const answerMessage = `The answer is ${
    answersAreCorrect ? "correct" : "incorrect"
  }`;

  return (
    <div className="togglesContainer">
      <div className="questionContainer">
        <h1>{question}</h1>
        {displayAnswers.map((answer, index) => {
          return (
            <ToggleChoice
              {...answer}
              handleChange={answersAreCorrect ? () => {} : handleChange(index)}
            />
          );
        })}
        <h2>{answerMessage}</h2>
      </div>
    </div>
  );
}

Toggles.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      correctChoiceIndex: PropTypes.number,
      choices: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default Toggles;
