const assert = require('assert');
const compact = require('../compact');

// import assert from 'assert';
// import lodashStable from 'lodash';
// import { LARGE_ARRAY_SIZE, _, falsey } from './utils.js';
// import compact from '../compact.js';
// import slice from '../slice.js';

describe('compact', function () {
  // var largeArray = lodashStable.range(LARGE_ARRAY_SIZE).concat(null);

  it('should filter falsey values', function () {
    const array = ['0', '1', '2'];
    console.log(compact(array));

    assert.deepStrictEqual(compact(array), ['1', '2']);
  });

  it('should filter falsey values', function () {
    const array = [0, 1, false, 2, '', 3];
    assert.deepStrictEqual(compact(array), [1, 2, 3]);
  });
});
