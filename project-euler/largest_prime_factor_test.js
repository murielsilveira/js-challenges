const assert = require('chai').assert
const largestPrimeFactor = require('./largest_prime_factor').largestPrimeFactor

/*
Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

describe('largestPrimeFactor', function() {
  it('of 2', function() {
    assert.equal(2, largestPrimeFactor(2))
  })

  it('of 3', function() {
    assert.equal(3, largestPrimeFactor(3))
  })

  it('of 5', function() {
    assert.equal(5, largestPrimeFactor(5))
  })

  it('of 7', function() {
    assert.equal(7, largestPrimeFactor(7))
  })

  it('of 13195', function() {
    assert.equal(29, largestPrimeFactor(13195))
  })

  it('of 600851475143', function() {
    assert.equal(6857, largestPrimeFactor(600851475143))
  })
})
