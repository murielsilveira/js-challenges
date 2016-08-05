'use strict'

function largestPrimeFactor(num, divisor=2) {
  // http://stackoverflow.com/questions/23287/largest-prime-factor-of-a-number/36360681#36360681
  if (num < 0) num = num * -1
  const square = (val) => Math.pow(val, 2)
  const isNotDivisible = (val, div) => val % div !== 0

  // console.log('num', 'divisor','num % divisor', 'square(divisor)')
  while (isNotDivisible(num, divisor) && square(divisor) <= num) {
    // console.log(num, divisor, num % divisor, square(divisor))
    divisor++
  }

  return square(divisor) <= num
    ? largestPrimeFactor(num / divisor, divisor)
    : num
}

exports.largestPrimeFactor = largestPrimeFactor
