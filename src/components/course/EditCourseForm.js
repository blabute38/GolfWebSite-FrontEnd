import React, {PropTypes} from 'react';
import CourseForm from '../partialForms/CourseForm';
import LocationForm from '../partialForms/LocationForm';
import SaveButton from '../common/SaveButton';

const EditCourseForm = (props) => {

  const {
    course,
    location,
    onSave,
    onChange,
    saving,
    errors
  } = props;

  return (
    <form>
      <h1>Manage Course</h1>
      <CourseForm {...props}/>
      <LocationForm {...props}/>
      <SaveButton {...props}/>
    </form>
  );
};

EditCourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default EditCourseForm;
