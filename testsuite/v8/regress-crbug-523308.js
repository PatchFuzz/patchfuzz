



var error;
try { reference_error(); } catch (e) { error = e; }
toString = error.toString;
error.__proto__ = [];
assertEquals("Error: reference_error is not defined", toString.call(error));
