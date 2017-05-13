import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
// import SelectInput from '../common/SelectInput';

const CourseForm = ({
  course,
  location,
  onSave,
  onChange,
  saving,
  errors
}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput name="name" label="Name" value={course.name} onChange={onChange} error={errors.name}/>

      <TextInput name="par" label="Par" value={course.par} onChange={onChange} error={errors.par}/>

      <TextInput
        name="address"
        label="Address"
        value={location.address}
        onChange={onChange}
        error={errors.address}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
  // return (    <form>        <h1>Manage Course</h1>        <TextInput            name="name"
  // label="Name"            value={course.name}            onChange={onChange} error={errors.name}/>
  // <TextInput            name="numOfHoles"            label="Holes" value={course.numOfHoles}
  // onChange={onChange} error={errors.numOfHoles} /> <TextInput            name="par" label="Par"
  // value={course.par} onChange={onChange}            error={errors.par}/> <TextInput name="address"
  // label="Address" value={course.location.address} onChange={onChange} error={errors.address} />
  // <TextInput            name="province" label="Province" value={course.location.province}
  // onChange={onChange} error={errors.province} /> <input            type="submit" disabled={saving}
  // value={saving ? 'Saving...' : 'Save'}            className="btn btn-primary" onClick={onSave}/>
  // </form> );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
