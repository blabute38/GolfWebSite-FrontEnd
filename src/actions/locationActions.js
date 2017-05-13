import * as types from '../constants/actionTypes';
// import locationApi from '../api/mockLocationApi'; import {beginAjaxCall, ajaxCallError} from
// './ajaxStatusActions';

export function loadLocationsSuccess(locations) {
  return {type: types.LOAD_LOCATIONS_SUCCESS, locations};
}

export function createLocationSuccess(location) {
  return {type: types.CREATE_LOCATION_SUCCESS, location: location};
}

export function updateLocationSuccess(location) {
  return {type: types.UPDATE_LOCATION_SUCCESS, location: location};
}

// import {normalize, schema, arrayOf} from 'normalizr';
//
// // Define a location const location = new schema.Entity('locations');
//
// // Define your location const location = new schema.Entity('locations', {location: location});
//
// // Define the schema const mySchema = [location];
//
export function loadLocations() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return locationApi.getAllLocations().then(locations => { //const normalizedData =
      normalize(locations[0], location);
      const normalizedData = normalize(locations, mySchema);
      return locations;
    }).then(locations => {
      dispatch(loadLocationsSuccess(locations));
    }).catch(error => {
      throw(error);
    });
  };
}
//
// export function saveLocation(location) {   return function(dispatch, getState) {
// dispatch(beginAjaxCall());     return locationApi.saveLocation(location).then(location => { if
// (location.id) {         dispatch(updateLocationSuccess(location));
// dispatch(updateLocationSuccess(location));       } else {
// dispatch(createLocationSuccess(location));         dispatch(createLocationSuccess(location));   }
//     }).catch(error => {       dispatch(ajaxCallError());       throw(error);     });   }; }
