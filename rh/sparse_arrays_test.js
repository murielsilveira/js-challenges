const assert = require('chai').assert
const sparseArrays = require('./sparse_arrays').sparseArrays

// https://www.hackerrank.com/challenges/sparse-arrays

describe('sparseArrays', function() {
  it('sample', function() {
    const input =
      '4\n' +
      'aba\n' +
      'baba\n' +
      'aba\n' +
      'xzxb\n' +
      '3\n' +
      'aba\n' +
      'xzxb\n' +
      'ab'

    assert.sameMembers([2, 1, 0], sparseArrays(input))
  })
})
