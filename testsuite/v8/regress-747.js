
































(function() {
  var x = 42;
  this.callEval = function() {eval('x');};
})();

try {
  callEval();
} catch (e) {
  assertUnreachable();
}

gc();
gc();
gc();
gc();
gc();
gc();

try {
  callEval();
} catch (e) {
  assertUnreachable();
}
