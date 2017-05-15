import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses, locations}) => {

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
        {courses.map(course => <CourseListRow key={course.id} course={course} location={locations[course.location] || {}}/>)}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  locations: PropTypes.object.isRequired
};

export default CourseList;
