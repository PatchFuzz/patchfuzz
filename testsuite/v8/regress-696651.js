





function get_a() {
  return 'aaaaaaaaaaaaaa';
}
function get_b() {
  return 'bbbbbbbbbbbbbb';
}

function get_string() {
  return get_a() + get_b();
}

function prefix(s) {
  return s + get_string();
};
%PrepareFunctionForOptimization(prefix);
prefix("");
prefix("");
%OptimizeFunctionOnNextCall(prefix);
var s = prefix("");
assertFalse(s === "aaaaaaaaaaaaaabbbbbbbbbbbbbc");
