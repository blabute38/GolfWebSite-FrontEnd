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
    numOfHoles: "18",
    holes: [
        {
          id: "hole1",
          number: 1,
          par: 4
        },
        {
          id: "hole2",
          number: 2,
          par: 4
        },
        {
          id: "hole3",
          number: 3,
          par: 4
        },
        {
          id: "hole4",
          number: 4,
          par: 4
        },
        {
          id: "hole5",
          number: 5,
          par: 4
        },
        {
          id: "hole6",
          number: 6,
          par: 4
        },
        {
          id: "hole7",
          number: 7,
          par: 4
        },
        {
          id: "hole8",
          number: 8,
          par: 4
        },
        {
          id: "hole9",
          number: 9,
          par: 4
        },
        {
          id: "hole10",
          number: 10,
          par: 4
        },
        {
          id: "hole11",
          number: 11,
          par: 4
        },
        {
          id: "hole12",
          number: 12,
          par: 4
        },
        {
          id: "hole13",
          number: 13,
          par: 4
        },
        {
          id: "hole14",
          number: 14,
          par: 4
        },
        {
          id: "hole15",
          number: 15,
          par: 4
        },
        {
          id: "hole16",
          number: 16,
          par: 4
        },
        {
          id: "hole17",
          number: 17,
          par: 4
        },
        {
          id: "hole18",
          number: 18,
          par: 4
        }
      ]
    },
    {
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
    },
    {
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
