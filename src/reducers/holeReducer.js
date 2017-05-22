import * as types from '../constants/actionTypes';

export default function holeReducer(state = {}, action) {

  switch (action.type) {
    case types.CREATE_HOLE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.hole)
      ];
    case types.LOAD_HOLES_SUCCESS:
      return Object.assign({}, state, action.holes);
    case types.UPDATE_HOLE_SUCCESS:
    debugger;
      return {
        ...state,
        [action.hole.id]: action.hole
      };
    default:
      return state;
  }
}
