'use strict'

var test = require('tape')
var createDataUri = require('./')

test(function (t) {
  t.equal(createDataUri('image/jpeg', 'photo'), 'data:image/jpeg;base64,photo')
  t.equal(createDataUri({type: 'image/jpeg'}, 'photo'), 'data:image/jpeg;base64,photo')
  t.equal(createDataUri({type: 'image/jpeg', charset: 'utf-8'}, 'photo'), 'data:image/jpeg;charset=utf-8;base64,photo')
  t.end()
})
