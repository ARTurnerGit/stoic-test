import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Toggles.css";

function Toggles({ question, answers }) {
  return <h1>{question}</h1>;
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
