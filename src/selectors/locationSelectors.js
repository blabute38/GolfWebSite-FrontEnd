import {createSelector} from 'reselect';

export const locationsSelector = state => state.entities.locations;

export const locationsArraySelector = createSelector([locationsSelector], locations => Object.keys(locations).map(id => locations[id]));
