'use strict'

var assert = require('assert-ok')
var format = require('simple-format')

module.exports = function createDataUri (type, data) {
  assert(type, 'mime type required')
  assert(data, 'data required')

  return format('data:%s;base64,%s', type, data)
}
