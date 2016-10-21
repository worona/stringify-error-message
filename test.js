var test = require('ava');
var stringifyError = require('./index');

var NOT_STRINGIFABLE = "An error impossible to stringify has happened";

test('Meteor errors', function(t) {
  var meteorError = {
    error:"404",
    message:"[ERROR]",
    errorType:"Meteor.Error",
    reason:"ERROR",
  };
  t.is(meteorError.reason,stringifyError(meteorError));
});

test('Javascript errors', function(t) {
  var error = new Error('fatal');
  t.is('fatal',stringifyError(error));
});

test('Just a string', function(t) {
  var error = 'fatal';
  t.is('fatal',stringifyError(error));
});

test('An String object', function(t) {
  var error = new String('fatal');
  t.is('fatal',stringifyError(error));
});

test('Function returning a string', function(t) {
  var error = function() { return 'fatal'};
  t.is('fatal',stringifyError(error));
});

test('Function not returning a string', function(t) {
  var error = function() { return {}};
  t.is(NOT_STRINGIFABLE,stringifyError(error),'It should say that this error is not possible to stringify');
});

test('Array is not stringifable', function(t) {
  var error = [];
  t.is(NOT_STRINGIFABLE,stringifyError(error),'It should say that this error is not possible to stringify');
});
