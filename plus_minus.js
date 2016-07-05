'use strict'

exports.report = function(list) {
  const precision = 6,
    size = list.length
  let zeroes = 0,
    negative = 0,
    positive = 0

  list.forEach((num) => {
    if (num === 0)
      zeroes += 1
    else if (num < 0)
      negative += 1
    else
      positive += 1
  })

  zeroes = (zeroes / size).toFixed(precision)
  negative = (negative / size).toFixed(precision)
  positive = (positive / size).toFixed(precision)

  return [positive, negative, zeroes]
}
