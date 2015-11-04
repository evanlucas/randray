'use strict'

module.exports = function randray(arr) {
  if (!Array.isArray(arr))
    throw new Error('argument must be an array')

  const len = arr.length

  if (!len)
    return null

  return arr[Math.floor(Math.random() * len)]
}
