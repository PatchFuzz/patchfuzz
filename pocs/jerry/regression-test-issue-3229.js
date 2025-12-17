var NISLFuzzingFunc = function(e) {
  Number(0).toString(e);
};

var NISLParameter4 = "Hello Jerry";

try {
  NISLFuzzingFunc(NISLParameter4);
  assert(false);
} catch (e) {
  assert(e instanceof RangeError);
}
try {
  Number.prototype.toString.call(-Infinity, "Unicorn invasion");
  assert(false);
} catch (e) {
  assert(e instanceof RangeError);
}
