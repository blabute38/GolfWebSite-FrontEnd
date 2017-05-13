import {combineReducers} from 'redux';
import entities from './entityReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({routing: routerReducer, entities: entities});

export default rootReducer;
