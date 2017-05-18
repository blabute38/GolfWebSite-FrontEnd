import delay from './delay';

const locations = [];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (location) => {
  return replaceAll(location.address, ' ', '-');
};

class LocationApi {
  static getAllLocations() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], locations));
      }, delay);
    });
  }

  static saveLocation(location) {
    location = Object.assign({}, location); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        // const minLocationNameLength = 1;
        // if (location.name.length < minLocationNameLength) {
        //   reject(`Name must be at least ${minLocationNameLength} characters.`);
        // }
        if (location.id) {
          const existingLocationIndex = locations.findIndex(a => a.id == location.id);
          locations.splice(existingLocationIndex, 1, location);
        } else {
          // Just simulating creation here. The server would generate ids and watchHref's for new locations in a
          // real app. Cloning so copy returned is passed by value rather than by reference.
          location.id = generateId(location);
          locations.push(location);
        }

        resolve(location);
      }, delay);
    });
  }

  static deleteLocation(locationId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfLocationToDelete = locations.findIndex(location => {
          location.id == locationId;
        });
        locations.splice(indexOfLocationToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default LocationApi;
