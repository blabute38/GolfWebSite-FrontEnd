import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import PageHeader from '../common/PageHeader';
import {browserHistory} from 'react-router';
import {coursesArraySelector} from '../../selectors/courseSelectors';
import {locationsSelector} from '../../selectors/locationSelectors';
import {holesArraySelector} from '../../selectors/holeSelector';
import Button from '../common/Button';

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
    let {courses, locations} = this.props;

    return (
      <div>
        <PageHeader title="Courses"/>
        <Button value="Add Course" onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses} locations={locations}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  locations: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {courses: coursesArraySelector(state), locations: locationsSelector(state)};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...courseActions
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
