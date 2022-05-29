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

  return (
    <div className="togglesContainer">
      <h1>{question}</h1>
      {displayAnswers.map((answer) => {
        return <ToggleChoice {...answer} />;
      })}
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
