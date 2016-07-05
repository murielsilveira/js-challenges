const assert = require('chai').assert
const staircase = require('./staircase')

describe('staircase.draw', function() {
  it('size 4', function() {
    assert.deepEqual(
      [
        '   #',
        '  ##',
        ' ###',
        '####',
      ], staircase.draw(4))
  })

  it('size 5', function() {
    assert.deepEqual(
      [
        '    #',
        '   ##',
        '  ###',
        ' ####',
        '#####',
      ], staircase.draw(5))
  })

  it('size 6', function() {
    assert.deepEqual(
      [
        '     #',
        '    ##',
        '   ###',
        '  ####',
        ' #####',
        '######',
      ], staircase.draw(6))
  })
})
