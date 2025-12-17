var o = {}
Error.captureStackTrace(o);
print(-1, o.stack.indexOf("captureStackTrace"));
