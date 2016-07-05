'use strict'

function sumDiagonals(matrix, size) {
  let sum = 0

  matrix.forEach((row, i) => {
    row.forEach((num, j) => {
      if (i === j) sum += num
      if (i === size - j - 1) sum -= num
    })
  })

  return Math.abs(sum)
}

exports.sumDiagonals = sumDiagonals
