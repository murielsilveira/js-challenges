'use strict'

function isPrime(number) {
  if (number < 2)
    return false

  if (number % 2 === 0)
    return number === 2

  for (let i = 3; i <= Math.sqrt(number); i = i + 2) {
    if (number % i === 0)
      return false
  }
  return true
}

function getNthPrime(nth) {
  if (nth < 1)
    return

  let primeCandidate = 2
  let position = 0

  while (true) {
    if (isPrime(primeCandidate)) {
      position++
      if (position === nth)
        break
    }
    primeCandidate++
  }

  return primeCandidate
}

module.exports = {
  isPrime,
  getNthPrime
}
