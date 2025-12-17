function first() {
  var arr = {a: "hello", b: "there"};
  var s = 'a|b';
  return s.replace(/[a-z]/g, function(a) { return arr[a]; }, 'g');
}
print(first(), "hello|there");

function second() {
  var arr = {a: "hello", c: "there"};
  var s = 'a|b|c';
  return s.replace(/[a-z]/g, function(a) { return arr[a]; }, 'g');
}
print(second(), "hello|undefined|there");

Object.defineProperty(Object.prototype, "b", {get: function() { return "what"; }});

print(second(), "hello|what|there");

function third() {
  var arr = {a: "hello", b: {toString: function() { arr = {}; return "three"; }}, c: "there"};
  var s = 'a|b|c';
  return s.replace(/[a-z]/g, function(a) { return arr[a]; }, 'g');
}
print(third(), "hello|three|undefined");
