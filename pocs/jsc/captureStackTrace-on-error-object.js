function a() {
  b();
}

function b() {
  c();
}

function c() {
  
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  
  Error.captureStackTrace(error, b); 
  throw error;
}

try {
  a();
} catch (e) {
  if (e.stack.split("\n").length !== 2)
    throw e;
}
