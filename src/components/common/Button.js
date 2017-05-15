import React, {PropTypes} from 'react';

const Button = (props) => {

  const {disabled, onClick, value} = props;

  return (<input
    type="submit"
    disabled={disabled}
    value={value}
    className="btn btn-primary"
    onClick={onClick}/>);
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default Button;
