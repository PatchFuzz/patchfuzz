Error.prepareStackTrace = function(e, frames) { return frames; }
print(() => new Error().stack[0].getMethodName.call({}), TypeError);

Error.prepareStackTrace = function(e, frames) { return frames.map(frame => new Proxy(frame, {})); }
print(() => new Error().stack[0].getMethodName(), TypeError);

Error.prepareStackTrace = function(e, frames) { return frames; }
print(null, new Error().stack[0].getMethodName());
