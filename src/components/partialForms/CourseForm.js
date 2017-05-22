import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import HoleForm from './HoleForm';

const CourseForm = (props) => {

  const {course, onSave, onChange, saving, errors} = props;
  let numOfHoles = 0;

  if (course.holes)
    numOfHoles = course.holes.length;

  return (
    <div>
      <TextInput
        name="name"
        label="Name"
        value={course.name || ''}
        onChange={onChange}
        error={errors.name}/>

      <TextInput
        name="numOfHoles"
        label="Holes"
        value={numOfHoles}
        onChange={onChange}
        error={errors.numOfHoles}/>

      <TextInput name="par" label="Par" value={course.par || ''} onChange={onChange} error={errors.par}/>

    </div>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
