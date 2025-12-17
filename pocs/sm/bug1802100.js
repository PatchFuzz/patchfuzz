setInterruptCallback(function() {
  throw {};
});


Object.prototype[Symbol.toPrimitive] = function () { return {} }


function b() {
  var c;
  interruptIf(true);
  b();
}
b();
