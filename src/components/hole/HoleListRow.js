import React, {PropTypes} from 'react';

const HoleListRow = (props) => {

  const {value, onChange, name} = props;

  return (
    <td><input value={value} type="number" className="form-control" onChange={onChange} name={name}/></td>
  );
};

HoleListRow.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default HoleListRow;
