const assert = require('chai').assert
const largestPalindromeProduct = require('./04_largest_palindrome_product').largestPalindromeProduct

/*
Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome
made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

describe('largestPalindromeProduct', function() {
  it('of 1 digit', function() {
    assert.equal(9, largestPalindromeProduct(1))
  })

  it('of 2 digits', function() {
    assert.equal(9009, largestPalindromeProduct(2))
  })

  it('of 3 digits', function() {
    this.timeout(10000)
    assert.equal(906609, largestPalindromeProduct(3))
  })

  it('should return null when invalid number of digits', function(){
    assert.equal(null, largestPalindromeProduct(0))
    assert.equal(null, largestPalindromeProduct(-1))
    assert.equal(null, largestPalindromeProduct(-123))
  })
})
