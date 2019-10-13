'use strict'

// “Array” Methods
// chunk(array, [size = 1])

// Arguments
// array(Array): The array to process.
// [size = 1](number): The length of each chunk

// Returns
//   (Array): Returns the new array of chunks.

function chunk(array, size = 1) {
  if (!Array.isArray(array) || array.length === 0) return [];
  size = Math.floor(size === 0 ? 1 : size);
  const newArr = [];
  let temp = 0;
  let index = 0;
  while (array.length > index) {
    newArr[temp++] = array.slice(index, index += size);
  }
  return newArr;
}

module.exports = chunk;
console.log(chunk(["a", "b", "c", "d"], 2));
