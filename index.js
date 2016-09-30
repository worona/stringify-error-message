'use strict';

module.exports = function stringifyError(value) {
  if (typeof value === 'object') {

    // Meteor Error or alike
    if (value.reason)
      return value.reason;

    // Default Javascript Error
    if (value instanceof Error)
      return value.message;

    // other Errors
		if (typeof value.message === 'string') {
			return value.message;
		}
    else {
      return "An Error impossible to stringify has happened";
    }

	}

  // simple string
  else if (typeof value === 'string')
    return value;

	// function
	else if (typeof value === 'function') {
		return value().toString();
	}

  else {
    return "An error impossible to stringify has happened";
  }

};
