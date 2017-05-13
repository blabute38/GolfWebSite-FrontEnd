import * as types from '../constants/actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import {createLocationSuccess, loadLocationsSuccess, updateLocationSuccess} from './locationActions';

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses: courses};
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course: course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course: course};
}

import {normalize, schema} from 'normalizr';

// Define a location
const location = new schema.Entity('locations');

// Define your course
const course = new schema.Entity('courses', {location: location});

// Define the schema
const mySchema = [course];

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      const normalizedData = normalize(courses, mySchema);
      dispatch(loadCoursesSuccess(normalizedData.entities.courses));
      dispatch(loadLocationsSuccess(normalizedData.entities.locations));
    }).catch(error => {});
  };
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(course => {
      if (course.id) {
        dispatch(updateCourseSuccess(course));
        dispatch(updateLocationSuccess(course));
      } else {
        dispatch(createCourseSuccess(course));
        dispatch(createLocationSuccess(course));
      }
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
