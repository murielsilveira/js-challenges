'use strict'

function sumEvenFibonacciNumbers(maxNumber) {
  if (maxNumber <= 1)
    return 0
  if (maxNumber === 2)
    return 2

  let first = 1
  let second = 2
  let sum = second

  while (true) {
    let next = first + second
    first = second
    second = next

    if (next > maxNumber)
      break

    if (next % 2 === 0)
      sum += next
  }

  return sum
}

exports.evenFibonacciNumbers = sumEvenFibonacciNumbers
