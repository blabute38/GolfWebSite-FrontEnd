import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import * as locationActions from '../../actions/locationActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
import {coursesArraySelector} from '../../selectors/courseSelectors';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  courseRow(course, index) {
    return <div key={index}>{course.name}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    let {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

  return {courses: coursesArraySelector(state)};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...courseActions,
      ...locationActions
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
