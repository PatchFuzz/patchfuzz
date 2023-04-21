

var NISLFuzzingFunc = function(e) {
  Number(0).toString(e);
};

var NISLParameter4 = "Hello Jerry";

try {
  NISLFuzzingFunc(NISLParameter4);
  print(false);
} catch (e) {
  print(e instanceof RangeError);
}
try {
  Number.prototype.toString.call(-Infinity, "Unicorn invasion");
  print(false);
} catch (e) {
  print(e instanceof RangeError);
}
