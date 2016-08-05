const assert = require('chai').assert
const multiples = require('./multiples_of_3_and_5')

/*
Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

describe('multiples.ofThreeAndFive', function() {
  it('when sum is zero', function() {
    assert.equal(0, multiples.ofThreeAndFive(2))
    assert.equal(0, multiples.ofThreeAndFive(1))
    assert.equal(0, multiples.ofThreeAndFive(0))
    assert.equal(0, multiples.ofThreeAndFive(-1))
  })

  it('below 4', function() {
    assert.equal(3, multiples.ofThreeAndFive(4))
  })

  it('below 6', function() {
    assert.equal(8, multiples.ofThreeAndFive(6))
  })

  it('below 10', function() {
    assert.equal(23, multiples.ofThreeAndFive(10))
  })

  it('below 13', function() {
    assert.equal(45, multiples.ofThreeAndFive(13))
  })

  it('below 1000', function() {
    assert.equal(233168, multiples.ofThreeAndFive(1000))
  })
})
