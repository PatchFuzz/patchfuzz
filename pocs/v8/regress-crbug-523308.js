var error;
try { reference_error(); } catch (e) { error = e; }
toString = error.toString;
error.__proto__ = [];
print("Error: reference_error is not defined", toString.call(error));
