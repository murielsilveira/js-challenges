'use strict'

function specialPythagoreanTriplet() {
  const sumLimit = 1000
  let a, b, c

  for (a = 0; a <= sumLimit; a++) {
    for (b = a + 1; b <= sumLimit; b++) {
      for (c = b + 1; c <= sumLimit; c++) {
        let sumIsValid = a + b + c === sumLimit
        let pythagorasIsValid = a * a + b * b === c * c

        if (sumIsValid && pythagorasIsValid)
          return {
            a, b, c
          }
      }
    }
  }
}

exports.specialPythagoreanTriplet = specialPythagoreanTriplet
