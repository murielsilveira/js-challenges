'use strict'

function largestPrimeFactor(num) {
  // http://stackoverflow.com/questions/23287/largest-prime-factor-of-a-number/36360681#36360681
  let divisor = 2
  let square = (val) => Math.pow(val, 2)

  while (num % divisor !== 0 && square(divisor) <= num) {
      divisor++
  }

  return square(divisor) <= num
      ? largestPrimeFactor(num / divisor, divisor)
      : num
}

exports.largestPrimeFactor = largestPrimeFactor
