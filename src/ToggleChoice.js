import React from "react";
import PropTypes from "prop-types";

function ToggleChoice({
  correctChoiceIndex,
  choices,
  currentChoiceIndex,
  handleChange,
}) {
  const handleClick = (currentChoiceIndex) => {
    handleChange(currentChoiceIndex);
  };
  return (
    <div className="toggleChoiceContainer">
      {choices.map((c, index) => {
        return (
          <div onClick={() => handleClick(index)}>
            {index === currentChoiceIndex ? <em>{c}</em> : c}
          </div>
        );
      })}
    </div>
  );
}

ToggleChoice.propTypes = {
  correctChoiceIndex: PropTypes.number.isRequired,
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentChoiceIndex: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ToggleChoice;
