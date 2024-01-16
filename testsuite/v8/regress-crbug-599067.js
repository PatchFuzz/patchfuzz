



try {
  var o = {};
  var p = new Proxy({}, o);
  Error.captureStackTrace(p);
} catch(e) {
  assertEquals("invalid_argument", e.message);
}
