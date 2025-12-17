try {
  var o = {};
  var p = new Proxy({}, o);
  Error.captureStackTrace(p);
} catch(e) {
  print("invalid_argument", e.message);
}
