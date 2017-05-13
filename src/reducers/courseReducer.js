import * as types from '../constants/actionTypes';
import initialState from '../state/initialState';

export default function courseReducer(state = {}, action) {

  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course)
      ];
    case types.LOAD_COURSES_SUCCESS:
      return Object.assign({}, state, action.courses);
    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}
