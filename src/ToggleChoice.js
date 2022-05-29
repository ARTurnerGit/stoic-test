import React from "react";
import PropTypes from "prop-types";

function ToggleChoice({ correctChoiceIndex, choices }) {
  return (
    <div className="toggleChoiceContainer">
      {choices.map((c) => (
        <div>{c}</div>
      ))}
    </div>
  );
}

ToggleChoice.propTypes = {
  correctChoiceIndex: PropTypes.number.isRequired,
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ToggleChoice;
