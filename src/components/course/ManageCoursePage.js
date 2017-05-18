import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import * as locationActions from '../../actions/locationActions';
import EditCourseForm from './EditCourseForm';
import toastr from 'toastr';

export class ManageCoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      location: Object.assign({}, props.location),
      errors: {},
      saving: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.updateLocationState = this.updateLocationState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    debugger;
    if (this.props.course.id != nextProps.course.id) {
      // necesary to populate form when existing course is loaded directly
      this.setState({course: Object.assign({}, nextProps.course)});
      this.setState({location: Object.assign({}, nextProps.location)});
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;

    course[field] = event.target.value;

    return this.setState({course: course});
  }

  updateLocationState(event) {
    const field = event.target.name;
    let location = this.state.location;

    location[field] = event.target.value;

    return this.setState({location: location});
  }

  courseFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.course.name.length < 5) {
      errors.name = 'Name must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});

    return formIsValid;
  }

  saveCourse(event) {
    event.preventDefault();

    if (!this.courseFormIsValid()) {
      return;
    }

    // this.setState({saving: true}); this.props.actions.saveCourse(this.state.course).then(() =>
    // this.props.actions.saveLocation(this.state.location)).then(() => this.redirect()).catch(error =>
    // {   toastr.error(error);   this.setState({saving: false}); });

    this.setState({saving: true});
    this.props.actions.saveLocation(this.state.location).then((locationId) => {
      this.setState({
        course: {
          ...this.state.course,
          location: locationId
        }
      })
      this.props.actions.saveCourse(this.state.course);
    }).then(() => this.redirect()).catch(error => {
      toastr.error(error);
      this.setState({saving: false});
    });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Course saved');
    this.context.router.push('/courses');
  }

  render() {
    return (<EditCourseForm
      onCourseChange={this.updateCourseState}
      onLocationChange={this.updateLocationState}
      onSave={this.saveCourse}
      course={this.state.course}
      location={this.state.location}
      errors={this.state.errors}
      saving={this.state.saving}/>);
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

// Pull in the React Router context so router is available on this.context.Router
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {

  const courseId = ownProps.params.id;
  const {
    entities: {
      courses,
      locations
    }
  } = state;
  const course = courses[courseId] || {};
  const location = locations[course.location] || {};

  return {course: course, location: location};
}

function mapDispatchToProps(dispatch) {

  return {
    actions: bindActionCreators({
      ...courseActions,
      ...locationActions
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
