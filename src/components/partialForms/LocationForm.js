import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const LocationForm = (props) => {

  const {location, onSave, onChange, saving, errors} = props;

  return (
    <div>
      <TextInput
        name="address"
        label="Address"
        value={location.address || ''}
        onChange={onChange}
        error={errors.address}/>
    </div>
  );
};

LocationForm.propTypes = {
  location: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default LocationForm;
