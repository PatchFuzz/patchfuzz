(function regressionCaseOne() {
  var c;
  for (let [a, b = c = function() { return a + b }] of [[0]]) {
    function f() { return a };
  }
  c();
})();

(function testForInFunction() {
  for (const {length: a, b = function() { return a, b }} in {foo: 42}) {
    print(b, (function() { return b() })());
  }
})();

(function testForOfFunction() {
  for (const [a, b = function() { return a, b }] of [[42]]) {
    print(b, (function() { return b() })());
  }
})();

(function testForInVariableProxy() {
  for (const {length: a, b = a} in {foo: 42}) {
    print(3, a);
    print(a, b);
  }
})();

(function testForOfVariableProxy() {
  for (const [a, b = a] of [[42]]) {
    print(42, a);
    print(a, b);
  }
})();

(function testClassLiteral() {
  for (let { a, b = class c { static f() { return a, b } } } of [{}]) {
    print(b, (function() { return b.f() })());
  }
})();



(function testClassLiteralMethod() {
  for (let { a, b = class c { m() { return c } } } of [{}]) {
    print(b, (function() { return (new b).m() })());
  }
})();



(function testClassLiteralComputedName() {
  let d;
  for (let { a, b = class c { [d = function() { return c }]() { } } } of [{}]) {
    print(b, (function() { return b, d() })());
  }
})();



(function testClassLiteralComputedName() {
  let d;
  for (let { a, b = class c extends (d = function() { return c }, Object) { } } of [{}]) {
    print(b, (function() { return b, d() })());
  }
})();
