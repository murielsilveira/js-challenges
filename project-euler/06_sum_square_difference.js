'use strict'

function sumOfTheSquaresBelow(largestNumber) {
  let sum = 0
  for(let i = 1; i <= largestNumber; i++) {
    sum += i * i
  }
  return sum
}

function squareOfTheSumBelow(largestNumber) {
  let sum = 0
  for(let i = 1; i <= largestNumber; i++) {
    sum += i
  }
  return sum * sum
}

function differenceBetweenSumOfTheSquaresAndSquareOfTheSum(largestNumber) {
  return squareOfTheSumBelow(largestNumber) - sumOfTheSquaresBelow(largestNumber)
}

module.exports = {
  sumOfTheSquaresBelow,
  squareOfTheSumBelow,
  differenceBetweenSumOfTheSquaresAndSquareOfTheSum
}
