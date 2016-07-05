const assert = require('chai').assert
const plusMinus = require('./plus_minus')

describe('plusMinus.report', function() {
  it('', function() {
    const output = plusMinus.report([-4, 3, -9, 0, 4, 1])

    assert.deepEqual(['0.500000', '0.333333', '0.166667'], output)
  })
})
