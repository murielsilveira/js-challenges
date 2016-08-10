'use strict'

function isPrime(number) {
  if (number < 2)
    return false

  if (number % 2 === 0)
    return number === 2

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0)
      return false
  }
  return true
}

function getNthPrime(nth) {

}

module.exports = {
  isPrime,
  getNthPrime
}
