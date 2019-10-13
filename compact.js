'use strict'

// “Array” Methods
// Creates an array with all falsey values removed.
// The values false, null, 0, "", undefined, and NaN are falsey.
// compact(array)

// Arguments
// array(Array): The array to compact.

// Returns
// (Array): Returns the new array of filtered values.


function compact(array) {
  if (!Array.isArray(array) || array.length === 0) return [];



  return array.filter((value) => value != false);
}

module.exports = compact;