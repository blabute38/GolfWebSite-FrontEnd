import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Name</th>
          <th>Holes</th>
          <th>Par</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => <CourseListRow key={course.id} course={course}/>)}
      </tbody>
    </table>
  );
}
// {Object.keys(courses).reduce(course => <CourseListRow key={course.id} course={course}/>)}
// {courses.map(course => <CourseListRow key={course.id} course={course}/>)}

CourseList.propTypes = {
  courses: PropTypes.object.isRequired
};

export default CourseList;
