'use strict';


module.exports = function stringifyError(value) {
  var NOT_STRINGIFABLE = "An error impossible to stringify has happened";

  if (typeof value === 'object') {

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
    return value;

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
