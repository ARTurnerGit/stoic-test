import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import ToggleChoice from "./ToggleChoice";
import "./Toggles.css";

function generateDisplayAnswers(answers) {
  const mappedAnswers = answers.map((a) => ({ ...a, currentChoiceIndex: 1 }));
  const randomisedAnswers = [];
  while (mappedAnswers.length > 0) {
    const randomIndex = Math.floor(Math.random() * mappedAnswers.length);
    randomisedAnswers.push({ ...mappedAnswers[randomIndex] });
    mappedAnswers.splice(randomIndex, 1);
  }
  return randomisedAnswers;
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

  const percentageCorrect = displayAnswers.reduce((acc, val) => {
    return val.currentChoiceIndex === val.correctChoiceIndex
      ? acc + 1 / displayAnswers.length
      : acc;
  }, 0);

  return (
    <div
      className={classnames("toggleContainer", {
        percentage0: percentageCorrect >= 0,
        percentage50: percentageCorrect >= 0.5,
        percentage100: percentageCorrect === 1,
      })}
    >
      <div className="questionContainer">
        <h1>{question}</h1>
        <div className="toggleChoicesContainer">
          {displayAnswers.map((answer, index) => {
            return (
              <ToggleChoice
                key={index}
                {...answer}
                handleChange={
                  answersAreCorrect ? () => {} : handleChange(index)
                }
              />
            );
          })}
        </div>
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
