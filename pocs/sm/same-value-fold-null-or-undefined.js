var xs = [
  null,
  undefined,
  {},
  123,
  NaN,
  false,
  Symbol(),
  "",
];


function testNull() {
  for (var i = 0; i < 500; ++i) {
    var x = xs[i & 7];
    print(Object.is(null, x), x === null);
    print(Object.is(x, null), x === null);
  }
}
for (let i = 0; i < 2; ++i) testNull();


function testUndefined() {
  for (var i = 0; i < 500; ++i) {
    var x = xs[i & 7];
    print(Object.is(undefined, x), x === undefined);
    print(Object.is(x, undefined), x === undefined);
  }
}
for (let i = 0; i < 2; ++i) testUndefined();
