'use strict'

function largestPalindromeProduct(numberOfDigits) {
  if (numberOfDigits < 1)
    return null

  let multiplierLimit = Number('1' + '0'.repeat(numberOfDigits)) - 1
  let largest = 0

  for (let i = 1; i <= multiplierLimit; i++) {
    for (let j = 1; j <= multiplierLimit; j++) {
      let prod = i * j
      let prodString = prod.toString()
      let prodStringReversed = prodString.split('').reverse().join('')
      if (prodString === prodStringReversed && prod > largest)
          largest = prod
    }
  }

  return largest
}

exports.largestPalindromeProduct = largestPalindromeProduct
