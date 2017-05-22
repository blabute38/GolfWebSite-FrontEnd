import * as types from '../constants/actionTypes';
import courseApi from '../api/mockCourseApi';
import locationApi from '../api/mockLocationApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import {createLocationSuccess, loadLocationsSuccess, updateLocationSuccess} from './locationActions';
import {createHoleSuccess, loadHolesSuccess, updateHoleSuccess} from './holeActions';
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
      dispatch(loadLocationsSuccess(normalizedData.entities.locations));
      dispatch(loadHolesSuccess(normalizedData.entities.holes));
      dispatch(loadCoursesSuccess(normalizedData.entities.courses));
    }).catch(error => {});
  };
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(course => {
      if (course.id) {
        dispatch(updateCourseSuccess(course));
      } else {
        dispatch(createCourseSuccess(course));
      }
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
