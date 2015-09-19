'use strict'

var test = require('tape')
var createDataUri = require('./')

test(function (t) {
  t.equal(createDataUri('image/jpeg', 'photo'), 'data:image/jpeg;base64,photo')
  t.end()
})
