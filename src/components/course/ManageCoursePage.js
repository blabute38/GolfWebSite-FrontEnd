import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import * as locationActions from '../../actions/locationActions';
import * as holeActions from '../../actions/holeActions';
import EditCourseForm from './EditCourseForm';
import toastr from 'toastr';
import {holesArraySelectorById} from '../../selectors/holeSelector';

export class ManageCoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      location: Object.assign({}, props.location),
      holes: Object.assign([], props.holes),
      errors: {},
      saving: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.updateLocationState = this.updateLocationState.bind(this);
    this.updateHolesState = this.updateHolesState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {

    if (this.props.course.id != nextProps.course.id) {
      // necesary to populate form when existing course is loaded directly
      this.setState({course: Object.assign({}, nextProps.course)});
      this.setState({location: Object.assign({}, nextProps.location)});
      this.setState({holes: Object.assign([], nextProps.holes)});
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

  updateHolesState(event) {
    const field = event.target.name;
    // returns array where first item is the field name and the second is the index
    let fieldAndIndex = field.split("-");
    let holes = this.state.holes;

    holes[fieldAndIndex[1]][fieldAndIndex[0]] = event.target.value;

    return this.setState({holes: Object.assign([], holes)});
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

    this.setState({saving: true});
    debugger;
    this.state.holes.map(hole => {
      debugger;
      this.props.actions.saveHole(hole);
    });
    this.props.actions.saveLocation(this.state.location).then((locationId) => {
      this.setState({
        course: {
          ...this.state.course,
          location: locationId
        }
      });
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
      onHolesChange={this.updateHolesState}
      onSave={this.saveCourse}
      course={this.state.course}
      location={this.state.location}
      holes={this.state.holes}
      errors={this.state.errors}
      saving={this.state.saving}/>);
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  holes: PropTypes.array.isRequired,
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
      locations,
      holes
    }
  } = state;
  const course = courses[courseId] || {};
  const location = locations[course.location] || {};
  const courseHoles = course.holes ? holesArraySelectorById(holes, course.holes) : [];

  return {course: course, location: location, holes: courseHoles};
}

function mapDispatchToProps(dispatch) {

  return {
    actions: bindActionCreators({
      ...courseActions,
      ...locationActions,
      ...holeActions
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
