





Error.prepareStackTrace = function(e, frames) { return frames; }
assertThrows(function() { new Error().stack[0].getMethodName.call({}); });
