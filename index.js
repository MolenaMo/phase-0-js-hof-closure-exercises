function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function map(array, callback) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i], i, array));
  }
  return newArr;
}

function filter(array, callback) {
  const difArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array) === true) {
      difArr.push(array[i]);
    }
  }
  return difArr;
}

function every(array2, callback) {
  for (let i = 0; i < array2.length; i++) {
    if (callback(array2[i], i, array2) === false) {
      return false;
    }
  }
  return true;
}

function some(array2, callback) {
  for (let counter = 0; counter < array2.length; counter++) {
    if (callback(array2[counter], counter, array2) === true) {
      return true;
    }
  }
  return false;
}

function majority(array, callback) {
  const majorityElement = Math.ceil(array.length / 2);
  let trueElement = 0;
  for (const el of array) {
    if (callback(el)) {
      trueElement++;
      if (trueElement >= majorityElement) return true;
    }
  }
  return false;
}

function once(callback) {
  let called = false;
  let cachedOutput;
  function innerOnce(...args) {
    if (!called) {
      cachedOutput = callback(...args);
      called = true;
      return cachedOutput;
    }
    return cachedOutput;
  }
  return innerOnce;
}

function groupBy(array, callback) {
  let result = {};
  for (const el of array) {
      let key = callback(el);
      if (!result.hasOwnProperty(key)) {
          result[key] = [];
      }
      result[key].push(el);
  }
  return result;
}

function arrayToObject(array, callback) {
  const res = {};
  for (const el of array) {
    res[el] = callback(el);
  }
  return res;
}


module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};
