import React, {PropTypes} from 'react';
import Button from './Button';

const SaveButton = (props) => {

  const {onSave, saving} = props;

  return (<Button disabled={saving} value={saving ? 'Saving...' : 'Save'} onClick={onSave}/>);
};

SaveButton.propTypes = {
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default SaveButton;
