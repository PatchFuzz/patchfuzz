













var expected = ['0', '1', '2', '3', '4', '5'];
var actual = [];

var v1 = typeof 13.37;
var v3 = Object(v1);
var v5 = [13.37,13.37];
var v6 = [v5];
v3.__proto__ = v6;

for (var v7 in v3) {
  actual.push(v7);
}

assert(actual.length === expected.length);

for (var i = 0; i < actual.length; i++) {
  assert(actual[i] === expected[i]);
}
