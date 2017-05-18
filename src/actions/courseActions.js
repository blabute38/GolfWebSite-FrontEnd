import * as types from '../constants/actionTypes';
import courseApi from '../api/mockCourseApi';
import locationApi from '../api/mockLocationApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import {createLocationSuccess, loadLocationsSuccess, updateLocationSuccess} from './locationActions';
import CourseSchema from '../schemas/courseSchema';
import {normalize} from 'normalizr';

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses: courses};
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course: course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course: course};
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      const normalizedData = normalize(courses, CourseSchema);

      return normalizedData;
      // dispatch(loadCoursesSuccess(normalizedData.entities.courses));
      // dispatch(loadLocationsSuccess(normalizedData.entities.locations));
    }).then(normalizedData => {
      dispatch(loadCoursesSuccess(normalizedData.entities.courses));

      return normalizedData;
    }).then(normalizedData => {
      dispatch(loadLocationsSuccess(normalizedData.entities.locations));

      return normalizedData;
    }).catch(error => {});
  };
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(course => {
      if (course.id) {
        dispatch(updateCourseSuccess(course));
        // dispatch(updateLocationSuccess(course));
      } else {
        dispatch(createCourseSuccess(course));
        // dispatch(createLocationSuccess(course));
      }
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
