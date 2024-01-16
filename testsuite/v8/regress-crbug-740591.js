



(function regressionCaseOne() {
  var c;
  for (let [a, b = c = function() { return a + b }] of [[0]]) {
    function f() { return a };
  }
  c();
})();

(function testForInFunction() {
  for (const {length: a, b = function() { return a, b }} in {foo: 42}) {
    assertSame(b, (function() { return b() })());
  }
})();

(function testForOfFunction() {
  for (const [a, b = function() { return a, b }] of [[42]]) {
    assertSame(b, (function() { return b() })());
  }
})();

(function testForInVariableProxy() {
  for (const {length: a, b = a} in {foo: 42}) {
    assertEquals(3, a);
    assertEquals(a, b);
  }
})();

(function testForOfVariableProxy() {
  for (const [a, b = a] of [[42]]) {
    assertEquals(42, a);
    assertEquals(a, b);
  }
})();

(function testClassLiteral() {
  for (let { a, b = class c { static f() { return a, b } } } of [{}]) {
    assertSame(b, (function() { return b.f() })());
  }
})();



(function testClassLiteralMethod() {
  for (let { a, b = class c { m() { return c } } } of [{}]) {
    assertSame(b, (function() { return (new b).m() })());
  }
})();



(function testClassLiteralComputedName() {
  let d;
  for (let { a, b = class c { [d = function() { return c }]() { } } } of [{}]) {
    assertSame(b, (function() { return b, d() })());
  }
})();



(function testClassLiteralComputedName() {
  let d;
  for (let { a, b = class c extends (d = function() { return c }, Object) { } } of [{}]) {
    assertSame(b, (function() { return b, d() })());
  }
})();
