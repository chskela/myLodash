const assert = require('assert');
const chunk = require('../chunk');

var array = [0, 1, 2, 3, 4, 5];
describe('chunk', function () {
  it('should return chunked arrays', function () {
    var actual = chunk(array, 3);
    assert.deepStrictEqual(actual, [[0, 1, 2], [3, 4, 5]]);
  });

  it('should return the last chunk as remaining elements', function () {
    var actual = chunk(array, 4);
    assert.deepStrictEqual(actual, [[0, 1, 2, 3], [4, 5]]);
  });

  it('should coerce `size` to an integer', function () {
    var array = [0, 1, 2, 3, 4, 5];
    assert.deepStrictEqual(chunk(array, array.length / 4), [[0], [1], [2], [3], [4], [5]]);
  });
});
