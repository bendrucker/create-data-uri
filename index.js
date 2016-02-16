'use strict'

var assert = require('assert-ok')

module.exports = function createDataUri (options, data) {
  var type = typeof options === 'object'
    ? [options.type, options.charset].filter(Boolean).join(';charset=')
    : options

  assert(typeof type === 'string', 'mime type required')
  assert(data, 'data required')

  return ['data:' + type, 'base64,' + data].join(';')
}
