import React from "react";
import PropTypes from "prop-types";

export const CheckBox = (props) => {
  return (
    <li>
      <input
        key={props.id}
        onChange={props.handleCheckChieldElement}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
      />
      {props.value}
    </li>
  );
};
CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  handleCheckChieldElement: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  isChecked: PropTypes.any.isRequired,
};
export default CheckBox;
