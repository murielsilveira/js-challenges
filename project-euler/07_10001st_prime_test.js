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

  it('9007199254740881 is prime', function() {
    this.timeout(20000)
    assert.isTrue(isPrime(9007199254740881))
  })
})
