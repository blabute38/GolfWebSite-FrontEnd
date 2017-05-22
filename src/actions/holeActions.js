import * as types from '../constants/actionTypes';
import holeApi from '../api/mockHoleApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadHolesSuccess(holes) {
  return {type: types.LOAD_HOLES_SUCCESS, holes};
}

export function createHoleSuccess(hole) {
  return {type: types.CREATE_HOLE_SUCCESS, hole: hole};
}

export function updateHoleSuccess(hole) {
  return {type: types.UPDATE_HOLE_SUCCESS, hole: hole};
}

export function saveHole(hole) {
   return function(dispatch, getState) {
     dispatch(beginAjaxCall());
     return holeApi.saveHole(hole).then(hole => {
       if(hole.id) {
         dispatch(updateHoleSuccess(hole));
      }
      else {
        dispatch(createHoleSuccess(hole));
      }
      return hole.id;
    })
    .catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
