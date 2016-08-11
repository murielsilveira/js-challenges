'use strict'

function sparseArrays(input) {
  const inputArray = input.split('\n')
  const numStrings = Number(inputArray[0])
  const strings = inputArray.slice(1, numStrings + 1)
  const numQueries = Number(inputArray[numStrings + 1])
  const queries = inputArray.slice(numStrings + 2, numStrings + 2 + numQueries)

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
