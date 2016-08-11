'use strict'

function dynamicArray(input) {
  const inputArray = input.split('\n')
  const firstLineArray = inputArray[0].split(' ')
  const n = Number(firstLineArray[0])
  const numberOfQueries = Number(firstLineArray[1])
  const queries = inputArray
    .slice(1, numberOfQueries + 1)
    .map(mapQuery)

  let seqList = range(n).map(emptyList)
  let lastAns = 0
  let answers = []

  queries.forEach(function(query){
    if (query.type === 1) {
      let seqIndex = (xor(query.x, lastAns) % n)
      seqList[seqIndex].push(query.y)
    }

    if (query.type === 2) {
      let seqIndex = (xor(query.x, lastAns) % n)
      let seq = seqList[seqIndex]
      let size = seq.length
      let listIndex = (query.y % size)
      lastAns = seq[listIndex]
      // console.log(lastAns)
      answers.push(lastAns)
    }
  })

  return answers
}

function mapQuery(rawQuery) {
  let queryArray = rawQuery.split(' ')
  return {
    type: Number(queryArray[0]),
    x: Number(queryArray[1]),
    y: Number(queryArray[2])
  }
}

function range(n) {
  return [...Array(n).keys()]
}

function emptyList() {
  return []
}

function xor(a, b) {
  return a ^ b
}

exports.dynamicArray = dynamicArray
