const assert = require('chai').assert
const smallestMultiple = require('./05_smallest_multiple').smallestMultiple

/*
Smallest multiple

2520 is the smallest number that can be divided by each of the numbers
from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all
of the numbers from 1 to 20?
*/

describe('smallestMultiple', function() {
  it('1 to 10', function() {
    assert.equal(2520, smallestMultiple(10))
  })

  it('1 to 20', function() {
    this.timeout(60000)
    assert.equal(232792560, smallestMultiple(20))
  })
})
