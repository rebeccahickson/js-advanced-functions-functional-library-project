const fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (collection, callback) {
      let group = collection;
      if (!Array.isArray(collection)) {
        group = Object.values(collection);
      }
      group.forEach((i) => callback(i));
      return collection;
    },

    map: function (collection, callback) {
      let group = collection;
      if (!Array.isArray(collection)) {
        group = Object.values(collection);
      }
      return group.map(callback);
    },

    reduce: function (collection, callback, acc) {
      let group = collection;
      if (!Array.isArray(collection)) {
        group = Object.values(collection);
      }
      if (!Number.isInteger(acc)) {
        acc = group[0];
        group = group.slice(1);
      }
      return group.reduce(callback, acc);
    },

    find: function (collection, predicate) {
      let group = collection;
      if (!Array.isArray(collection)) {
        group = Object.values(collection);
      }
      return group.find(predicate);
    },

    filter: function (collection, predicate) {
      let group = collection;
      if (!Array.isArray(collection)) {
        group = Object.values(collection);
      }
      return group.filter(predicate);
    },

    size: function (collection) {
      return Object.values(collection).length;
    },

    first: function (array, n) {
      if (Number.isInteger(n)) {
        return array.slice(0, n);
      } else {
        return array[0];
      }
    },

    last: function (array, n) {
      if (Number.isInteger(n)) {
        return array.slice(array.length - n);
      } else {
        return array[array.length - 1];
      }
    },

    compact: function (array) {
      return array.filter((e) => {
        if (!!e) {
          return e;
        }
      });
    },

    sortBy: function (array, callback) {
      let newArr = [...array];
      return newArr.sort(function (a, b) {
        return callback(a) - callback(b);
      });
    },

    flatten: function (array, boolean) {
      let newArr = [...array];
      if (boolean === true) {
        newArr = newArr.flat(1);
      } else {
        newArr = newArr.flat(Infinity);
      }
      return newArr;
    },

    uniq: function (array, isSorted, callback = false) {
      if (callback === false) {
        return [...new Set(array)];
      } else {
        let test = new Set();
        let answer = [];
        array.forEach((x) => {
          if (!test.has(callback(x))) {
            test.add(callback(x));
            answer.push(x);
          }
        });
        return answer;
      }
    },

    keys: function (obj) {
      return Object.keys(obj);
    },

    values: function (obj) {
      return Object.values(obj);
    },

    functions: function (object) {
      let arr = Object.keys(object);
      let filteredArr = arr.filter((x) => {
        if (typeof object[x] === "function") {
          return x;
        }
      });
      return filteredArr;
    },
  };
})();

fi.libraryMethod();
