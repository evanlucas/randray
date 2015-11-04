'use strict'

const test = require('tap').test
    , randray = require('./')

test('throws if argument is not an array', function(t) {
  t.throws(function() {
    randray(true)
  }, /argument must be an array/)
})

test('return null if empty array', function(t) {
  t.plan(1)
  t.strictEqual(randray([]), null)
})

test('returns a random item from array', function(t) {
  t.plan(1)
  const items = ['my', 'name', 'is', 'evan']
  const out = randray(items)
  t.ok(items.indexOf(out) !== -1)
})
