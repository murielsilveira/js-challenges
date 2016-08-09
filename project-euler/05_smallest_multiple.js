'use strict'

function smallestMultiple(largestMultiple) {
  let smallest
  let multiplier = 1
  while (true) {
    smallest = largestMultiple * multiplier
    if (isDivisibleFromOneTo(smallest, largestMultiple))
      break
    multiplier++
  }
  return smallest
}

function isDivisibleFromOneTo(dividend, largestMultiple) {
  for (let divisor = largestMultiple; divisor > 0; divisor--) {
    if (dividend % divisor !== 0)
      return false
  }
  return true
}


exports.smallestMultiple = smallestMultiple
