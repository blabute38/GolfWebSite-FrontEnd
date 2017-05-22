import {combineReducers} from 'redux';
import courses from './courseReducer';
import locations from './locationReducer';
import holes from './holeReducer';

const entityReducer = combineReducers({courses: courses, locations: locations, holes: holes});

export default entityReducer;
