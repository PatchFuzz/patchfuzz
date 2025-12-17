var sab = new SharedArrayBuffer(8);
var ta = new Int32Array(sab);
ta.__defineSetter__('length', function() {;});
print(function() {
  Atomics.compareExchange(ta, 4294967295, 0, 0);
}, RangeError);
