




























function ToDictionaryMode(x) {
  %OptimizeObjectForAddingMultipleProperties(x, 100);
}

var A, B, C;


A = {};
Object.defineProperty(A, "foo", { value: function() { assertUnreachable(); }});

B = Object.create(A);
Object.defineProperty(B, "foo", { value: function() { return 111; }});

C = Object.create(B);

function bar(x) { return x.foo(); }

%PrepareFunctionForOptimization(bar);
assertEquals(111, bar(C));
assertEquals(111, bar(C));
ToDictionaryMode(B);
%OptimizeFunctionOnNextCall(bar);
assertEquals(111, bar(C));


A = {};
Object.defineProperty(A, "baz", { get: function() { assertUnreachable(); }});

B = Object.create(A);
Object.defineProperty(B, "baz", { get: function() { return 111; }});

C = Object.create(B);

function boo(x) { return x.baz; }

%PrepareFunctionForOptimization(boo);
assertEquals(111, boo(C));
assertEquals(111, boo(C));
ToDictionaryMode(B);
%OptimizeFunctionOnNextCall(boo);
assertEquals(111, boo(C));


A = {};
Object.defineProperty(A, "huh", { set: function(x) { assertUnreachable(); }});

B = Object.create(A);
var setterValue;
Object.defineProperty(B, "huh", { set: function(x) { setterValue = x; }});

C = Object.create(B);

function fuu(x) {
  setterValue = 222;
  x.huh = 111;
  return setterValue;
}

%PrepareFunctionForOptimization(fuu);
assertEquals(111, fuu(C));
assertEquals(111, fuu(C));
ToDictionaryMode(B);
%OptimizeFunctionOnNextCall(fuu);
assertEquals(111, fuu(C));
