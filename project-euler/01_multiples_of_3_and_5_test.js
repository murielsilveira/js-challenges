const assert = require('chai').assert
const sum = require('./multiples_of_3_and_5')

/*
Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

describe('sum.multiplesOfThreeAndFiveBelow', function() {
  it('when sum is zero', function() {
    assert.equal(0, sum.multiplesOfThreeAndFiveBelow(2))
    assert.equal(0, sum.multiplesOfThreeAndFiveBelow(1))
    assert.equal(0, sum.multiplesOfThreeAndFiveBelow(0))
    assert.equal(0, sum.multiplesOfThreeAndFiveBelow(-1))
  })

  it('below 4', function() {
    assert.equal(3, sum.multiplesOfThreeAndFiveBelow(4))
  })

  it('below 6', function() {
    assert.equal(8, sum.multiplesOfThreeAndFiveBelow(6))
  })

  it('below 10', function() {
    assert.equal(23, sum.multiplesOfThreeAndFiveBelow(10))
  })

  it('below 13', function() {
    assert.equal(45, sum.multiplesOfThreeAndFiveBelow(13))
  })

  it('below 1000', function() {
    assert.equal(233168, sum.multiplesOfThreeAndFiveBelow(1000))
  })
})
