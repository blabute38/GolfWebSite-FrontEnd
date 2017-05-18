import React, {PropTypes} from 'react';
import CourseForm from '../partialForms/CourseForm';
import LocationForm from '../partialForms/LocationForm';
import SaveButton from '../common/SaveButton';

const EditCourseForm = ({
  course,
  location,
  onSave,
  onCourseChange,
  onLocationChange,
  saving,
  errors
}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <CourseForm
        course={course}
        onSave={onSave}
        onChange={onCourseChange}
        saving={saving}
        errors={errors}/>
      <LocationForm
        location={location}
        onSave={onSave}
        onChange={onLocationChange}
        saving={saving}
        errors={errors}/>
      <SaveButton onSave={onSave} saving={saving}/>
    </form>
  );
};

EditCourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onCourseChange: PropTypes.func.isRequired,
  onLocationChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default EditCourseForm;
