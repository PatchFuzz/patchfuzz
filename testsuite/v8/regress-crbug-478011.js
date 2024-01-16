



var e = {};
Object.preventExtensions(e);
assertThrows(function() { Error.captureStackTrace(e) });
