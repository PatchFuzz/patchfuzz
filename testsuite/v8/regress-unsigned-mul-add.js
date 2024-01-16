



function f(a) {
  var x = a >>> 0;
  return (x * 1.0 + x * 1.0) << 0;
}

assertEquals(-2, f(-1));
