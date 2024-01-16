



var o = {}
Error.captureStackTrace(o);
assertEquals(-1, o.stack.indexOf("captureStackTrace"));
