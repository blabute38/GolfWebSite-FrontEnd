import * as types from '../constants/actionTypes';
import initialState from '../state/initialState';

export default function locationReducer(state = {}, action) {

  switch (action.type) {
    case types.CREATE_LOCATION_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.location)
      ];
    case types.LOAD_LOCATIONS_SUCCESS:
      return Object.assign({}, state, action.locations);
    case types.UPDATE_LOCATION_SUCCESS:
      return [
        ...state.filter(location => location.id !== action.location.id),
        Object.assign({}, action.location)
      ];
    default:
      return state;
  }
}
