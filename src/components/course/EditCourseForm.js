import React, {PropTypes} from 'react';
import CourseForm from '../partialForms/CourseForm';
import LocationForm from '../partialForms/LocationForm';
import HoleForm from '../partialForms/HoleForm';
import SaveButton from '../common/SaveButton';

const EditCourseForm = ({
  course,
  location,
  holes,
  onSave,
  onCourseChange,
  onLocationChange,
  onHolesChange,
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
      <HoleForm holes={holes} onSave={onSave} onChange={onHolesChange} saving={saving} errors={errors}/>
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
  holes: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onCourseChange: PropTypes.func.isRequired,
  onLocationChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default EditCourseForm;
