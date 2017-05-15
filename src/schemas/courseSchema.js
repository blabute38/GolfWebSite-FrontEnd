import {schema} from 'normalizr';

// Define a location
const location = new schema.Entity('locations');

// Define your course
const course = new schema.Entity('courses', {location: location});

// Define the schema
const CourseSchema = [course];

export default CourseSchema;
