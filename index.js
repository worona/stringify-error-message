'use strict';


module.exports = function stringifyError(value) {
  var NOT_STRINGIFABLE = "stringifyError: An error impossible to stringify has happened";
  var EMPTY = "stringifyError:  Error without any description or information";

  if (typeof value === 'object') {

    // Empty object
    if (Object.getOwnPropertyNames(value).length == 0)
      return EMPTY;

    // Meteor Error or alike
    if (typeof value.reason === 'string')
      return value.reason;

    // Meteor Error or alike
    if (typeof value.error === 'string')
      return value.error;

    // Default Javascript Error
    if (value instanceof Error)
      return value.message;

    // other Errors
		if (typeof value.message === 'string') {
			return value.message;
		}

    // An String Object
    else if (value instanceof String)
      return value.valueOf();

    else {
      return NOT_STRINGIFABLE;
    }

	}

  // simple string
  else if (typeof value === 'string')
    if (value === '') return EMPTY;
    else return value;

	// function
	else if (typeof value === 'function') {
		var ret = value();
    if (typeof ret === 'string')
      return ret;
    else
      return NOT_STRINGIFABLE;
	}

  else {
    return NOT_STRINGIFABLE;
  }

};
