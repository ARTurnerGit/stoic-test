import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

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
          <>
            <div
              className="highlighter"
              style={{ marginLeft: `${currentChoiceIndex * 50}%` }}
            />
            <div className="toggleChoice" onClick={() => handleClick(index)}>
              <span
                className={classnames({
                  highlightedChoice: currentChoiceIndex === index,
                })}
              >
                {c}
              </span>
            </div>
          </>
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
