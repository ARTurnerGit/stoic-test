import React, { useState } from "react";
import PropTypes from "prop-types";

import ToggleChoice from "./ToggleChoice";
import "./Toggles.css";

function Toggles({ question, answers }) {
  return (
    <div className="togglesContainer">
      <h1>{question}</h1>
      {answers.map((answer) => {
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
