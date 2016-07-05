const assert = require('chai').assert
const matrix = require('./matrix')

describe('matrix.sumDiagonals', function() {
  it('size 3 example one', function() {
    const size = 3
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]

    const diff = matrix.sumDiagonals(input, size)

    assert.equal(0, diff)
  })

  it('size 3 example two', function() {
    const size = 3
    const input = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12]
    ]

    const diff = matrix.sumDiagonals(input, size)

    assert.equal(15, diff)
  })

  it('size 4 example', function() {
    const size = 4
    const input = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 8, 7, 6],
      [5, 4, 3, 2]
    ]

    const diff = matrix.sumDiagonals(input, size)

    assert.equal(8, diff)
  })

  it('size 5 example', function() {
    const size = 5
    const input = [
      [1, 2, 3, 4, 5],
      [5, 6, 7, 8, 9],
      [9, 8, 7, 6, 7],
      [5, 4, 3, 2, 3],
      [5, 4, 3, 2, 3]
    ]

    const diff = matrix.sumDiagonals(input, size)

    assert.equal(10, diff)
  })
})
