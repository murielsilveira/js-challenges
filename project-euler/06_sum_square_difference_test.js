const assert = require('chai').assert
const {
  sumOfTheSquaresBelow,
  squareOfTheSumBelow,
  differenceBetweenSumOfTheSquaresAndSquareOfTheSum
} = require('./06_sum_square_difference')

/*
Sum square difference

The sum of the squares of the first ten natural numbers is,

  12 + 22 + ... + 102 = 385

The square of the sum of the first ten natural numbers is,

  (1 + 2 + ... + 10)2 = 552 = 3025

Hence the difference between the sum of the squares of the first ten natural
numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred
natural numbers and the square of the sum.
*/

describe('sumOfTheSquaresBelow', function() {
  it('1', function() {
    assert.equal(1, sumOfTheSquaresBelow(1))
  })

  it('2', function() {
    assert.equal(5, sumOfTheSquaresBelow(2))
  })

  it('3', function() {
    assert.equal(14, sumOfTheSquaresBelow(3))
  })

  it('10', function() {
    assert.equal(385, sumOfTheSquaresBelow(10))
  })
})

describe('squareOfTheSumBelow', function() {
  it('1', function() {
    assert.equal(1, squareOfTheSumBelow(1))
  })

  it('2', function() {
    assert.equal(9, squareOfTheSumBelow(2))
  })

  it('3', function() {
    assert.equal(36, squareOfTheSumBelow(3))
  })

  it('10', function() {
    assert.equal(3025, squareOfTheSumBelow(10))
  })
})

describe('differenceBetweenSumOfTheSquaresAndSquareOfTheSum', function() {
  it('1', function() {
    assert.equal(0, differenceBetweenSumOfTheSquaresAndSquareOfTheSum(1))
  })

  it('2', function() {
    assert.equal(4, differenceBetweenSumOfTheSquaresAndSquareOfTheSum(2))
  })

  it('3', function() {
    assert.equal(22, differenceBetweenSumOfTheSquaresAndSquareOfTheSum(3))
  })

  it('10', function() {
    assert.equal(2640, differenceBetweenSumOfTheSquaresAndSquareOfTheSum(10))
  })

  it('100', function() {
    assert.equal(25164150, differenceBetweenSumOfTheSquaresAndSquareOfTheSum(100))
  })
})
