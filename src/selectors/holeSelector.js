import {createSelector} from 'reselect';

export const holesSelector = state => state.entities.holes;

export const holesArraySelector = createSelector([holesSelector], holes => Object.keys(holes).map(id => holes[id]));

export const holesArraySelectorById = (holes, ids) => Object.keys(holes).map(id => holes[id]).filter(hole => ids.includes(hole.id));
