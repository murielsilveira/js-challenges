const assert = require('chai').assert
const {isPrime, getNthPrime} = require('./07_10001st_prime')

/*
10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

describe('isPrime', function() {
  it('1 is not prime', function() {
    assert.isFalse(isPrime(1))
  })

  it('even greater than 2 are not prime', function() {
    assert.isFalse(isPrime(4))
    assert.isFalse(isPrime(10))
    assert.isFalse(isPrime(1234))
    assert.isFalse(isPrime(123412340))
  })

  it('2 is prime', function() {
    assert.isTrue(isPrime(2))
  })

  it('3 is prime', function() {
    assert.isTrue(isPrime(3))
  })

  it('5 is prime', function() {
    assert.isTrue(isPrime(5))
  })

  it('7 is prime', function() {
    assert.isTrue(isPrime(7))
  })

  it('13 is prime', function() {
    assert.isTrue(isPrime(13))
  })

  it('997 is prime', function() {
    assert.isTrue(isPrime(997))
  })

  it('104743 is prime', function() {
    assert.isTrue(isPrime(104743))
  })
})

describe('getNthPrime', function() {
  it('should be larger than 1', function() {
    assert.equal(undefined, getNthPrime(0))
    assert.equal(undefined, getNthPrime(-1))
    assert.equal(undefined, getNthPrime(-123))
  })

  it('1st prime is 2', function() {
    assert.equal(2, getNthPrime(1))
  })

  it('2nd prime is 3', function() {
    assert.equal(3, getNthPrime(2))
  })

  it('3rd prime is 5', function() {
    assert.equal(5, getNthPrime(3))
  })

  it('4th prime is 7', function() {
    assert.equal(7, getNthPrime(4))
  })

  it('5th prime is 11', function() {
    assert.equal(11, getNthPrime(5))
  })

  it('6th prime is 13', function() {
    assert.equal(13, getNthPrime(6))
  })

  it('168th prime is 997', function() {
    assert.equal(997, getNthPrime(168))
  })

  it('10.001st prime is 104743', function() {
    assert.equal(104743, getNthPrime(10001))
  })
})
