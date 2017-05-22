import delay from './delay';

const holes = [];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (hole) => {
  return replaceAll(hole.address, ' ', '-');
};

class HoleApi {
  static getAllHoles() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], holes));
      }, delay);
    });
  }

  static saveHole(hole) {
    hole = Object.assign({}, hole); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        // const minHoleNameLength = 1;
        // if (hole.name.length < minHoleNameLength) {
        //   reject(`Name must be at least ${minHoleNameLength} characters.`);
        // }
        if (hole.id) {
          const existingHoleIndex = holes.findIndex(a => a.id == hole.id);
          holes.splice(existingHoleIndex, 1, hole);
        } else {
          // Just simulating creation here. The server would generate ids and watchHref's for new holes in a
          // real app. Cloning so copy returned is passed by value rather than by reference.
          hole.id = generateId(hole);
          holes.push(hole);
        }

        resolve(hole);
      }, delay);
    });
  }

  static deleteHole(holeId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfHoleToDelete = holes.findIndex(hole => {
          hole.id == holeId;
        });
        holes.splice(indexOfHoleToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default HoleApi;
