function ToDictionaryMode(x) {
  %OptimizeObjectForAddingMultipleProperties(x, 100);
}

var A, B, C;


A = {};
Object.defineProperty(A, "foo", { value: function() { print(); }});

B = Object.create(A);
Object.defineProperty(B, "foo", { value: function() { return 111; }});

C = Object.create(B);

function bar(x) { return x.foo(); }

%PrepareFunctionForOptimization(bar);
print(111, bar(C));
print(111, bar(C));
ToDictionaryMode(B);
%OptimizeFunctionOnNextCall(bar);
print(111, bar(C));


A = {};
Object.defineProperty(A, "baz", { get: function() { print(); }});

B = Object.create(A);
Object.defineProperty(B, "baz", { get: function() { return 111; }});

C = Object.create(B);

function boo(x) { return x.baz; }

%PrepareFunctionForOptimization(boo);
print(111, boo(C));
print(111, boo(C));
ToDictionaryMode(B);
%OptimizeFunctionOnNextCall(boo);
print(111, boo(C));


A = {};
Object.defineProperty(A, "huh", { set: function(x) { print(); }});

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
print(111, fuu(C));
print(111, fuu(C));
ToDictionaryMode(B);
%OptimizeFunctionOnNextCall(fuu);
print(111, fuu(C));
