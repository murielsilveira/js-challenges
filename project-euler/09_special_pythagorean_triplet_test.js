const assert = require('chai').assert
const {specialPythagoreanTriplet} = require('./09_special_pythagorean_triplet')

/*
Special Pythagorean triplet

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

  a^2 + b^2 = c^2

For example, 3^2 + 4^2 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

describe('specialPythagoreanTriplet', function() {
  it('200 375 425', function() {
    this.timeout(150000)
    let {a, b, c} = specialPythagoreanTriplet()

    assert.isTrue(a < b)
    assert.isTrue(b < c)
    assert.equal(a * a + b * b, c * c)
    assert.equal(1000, a + b + c)
    assert.equal(31875000, a * b * c)
  })
})
