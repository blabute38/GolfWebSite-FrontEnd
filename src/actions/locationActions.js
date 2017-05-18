import * as types from '../constants/actionTypes';
import locationApi from '../api/mockLocationApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadLocationsSuccess(locations) {
  return {type: types.LOAD_LOCATIONS_SUCCESS, locations};
}

export function createLocationSuccess(location) {
  return {type: types.CREATE_LOCATION_SUCCESS, location: location};
}

export function updateLocationSuccess(location) {
  return {type: types.UPDATE_LOCATION_SUCCESS, location: location};
}

export function saveLocation(location) {
   return function(dispatch, getState) {
     dispatch(beginAjaxCall());
     return locationApi.saveLocation(location).then(location => {
       if(location.id) {
         dispatch(updateLocationSuccess(location));
      }
      else {
        dispatch(createLocationSuccess(location));
      }
      return location.id;
    })
    .catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
