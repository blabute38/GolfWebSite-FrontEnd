import {createSelector} from 'reselect';

export const coursesSelector = state => state.entities.courses;

export const coursesArraySelector = createSelector([coursesSelector], courses => Object.keys(courses).map(id => courses[id]));
