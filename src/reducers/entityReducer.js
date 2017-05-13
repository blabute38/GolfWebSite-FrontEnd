import {combineReducers} from 'redux';
import courses from './courseReducer';
import locations from './locationReducer';

const entityReducer = combineReducers({courses: courses, locations: locations});

export default entityReducer;
