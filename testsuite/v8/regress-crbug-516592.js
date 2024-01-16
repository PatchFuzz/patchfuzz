



var i = Math.pow(2, 31);
var a = [];
a[i] = 31;
var b = [];
b[i - 2] = 33;
try {
  
  var c = a.concat(b);
  
  Object.observe(c, function() {});
  c.length = 1;
} catch(e) {
  assertTrue(e instanceof RangeError);
}
