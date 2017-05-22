import {schema} from 'normalizr';

// Define a location and hole
const location = new schema.Entity('locations');
const hole = new schema.Entity('holes');

// Define your course
const course = new schema.Entity('courses', {location: location, holes: [hole]});

// Define the schema
const CourseSchema = [course];

export default CourseSchema;
