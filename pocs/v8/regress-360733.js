function f(a) {
  f(a + 1);
}

Error.__defineGetter__('stackTraceLimit', function() { });
try {
  f(0);
} catch (e) { }
