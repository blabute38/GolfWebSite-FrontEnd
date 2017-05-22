import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {locationFormattedForScreen} from '../../formatters/locationFormatters';

const CourseListRow = (props) => {

  const {course, location} = props;
  let numOfHoles = 0;

  if (course.holes)
    numOfHoles = course.holes.length;

  return (
    <tr>
      <td>
        <a href={course.websiteHref} target="_blank">Website</a>
      </td>
      <td>
        <Link to={'/course/' + course.id}>{course.name}</Link>
      </td>
      <td>{numOfHoles}</td>
      <td>{course.par}</td>
      <td>{location.address}</td>
    </tr>
  );
};
//<td>{locationFormattedForScreen(location)}</td>

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default CourseListRow;
