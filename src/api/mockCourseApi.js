import delay from './delay';

// This file mocks a web API by working with the hard-coded data below. It uses setTimeout to
// simulate the delay of an AJAX call. All calls return promises.
const courses = [
  {
    id: "willow-creek",
    name: "Willow Creek",
    websiteHref: "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=willow+creek+golf+cours" +
        "e",
    location: {
      id: 1,
      address: "785 Puce Rd",
      city: "Essex",
      province: "ON",
      postalCode: "N8M 2X7",
      country: "Canada"
    },
    par: "69",
    numOfHoles: "18"
  }, {
    id: "rochester",
    name: "Rochester",
    websiteHref: "http://www.rochesterplace.com/",
    location: {
      id: 2,
      address: "981 County Road 2",
      city: "Belle River",
      province: "ON",
      postalCode: "N0R 1A0",
      country: "Canada"
    },
    par: "72",
    numOfHoles: "18"
  }, {
    id: "fox-glen",
    name: "Fox Glen",
    websiteHref: "http://www.foxglengolfclub.com/",
    location: {
      id: 3,
      address: "7525 Howard Ave",
      city: "McGregor",
      province: "ON",
      postalCode: "N0R 1J0",
      country: "Canada"
    },
    par: "70",
    numOfHoles: "18"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.name, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseNameLength = 1;
        if (course.name.length < minCourseNameLength) {
          reject(`Name must be at least ${minCourseNameLength} characters.`);
        }
        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          // Just simulating creation here. The server would generate ids and watchHref's for new courses in a
          // real app. Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.id == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;
