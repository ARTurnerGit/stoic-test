import React from "react";
import PropTypes from "prop-types";

function ToggleChoice({ correctChoiceIndex, choices, currentChoiceIndex }) {
  return (
    <div className="toggleChoiceContainer">
      {choices.map((c, index) => {
        return index === currentChoiceIndex ? (
          <div>
            <em>{c}</em>
          </div>
        ) : (
          <div>{c}</div>
        );
      })}
    </div>
  );
}

ToggleChoice.propTypes = {
  correctChoiceIndex: PropTypes.number.isRequired,
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentChoiceIndex: PropTypes.number.isRequired,
};

export default ToggleChoice;
