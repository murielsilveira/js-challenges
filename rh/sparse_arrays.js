'use strict'

function sparseArrays(input) {
  const inputArray = input.split('\n')
  const n = Number(inputArray[0])
  const strings = inputArray.slice(1, n + 1)
  const q = Number(inputArray[n + 1])
  const queries = inputArray.slice(n + 2, n + 2 + q)

  let answser = []

  queries.forEach(function(query) {
    let count = countAllOccurrencesInArray(strings, query)
    // console.log(count)
    answser.push(count)
  })

  return answser
}

function countAllOccurrencesInArray(array, query) {
  let index = array.indexOf(query)
  let count = 0
  while (index !== -1) {
    count++
    index = array.indexOf(query, index + 1)
  }
  return count
}

exports.sparseArrays = sparseArrays
