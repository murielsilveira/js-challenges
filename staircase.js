'use strict'

function draw(size) {
  var tree = []
  for (var i = 1; i <= size; i++) {
    tree.push(' '.repeat(size - i) + '#'.repeat(i))
  }
  return tree
}

exports.draw = draw
