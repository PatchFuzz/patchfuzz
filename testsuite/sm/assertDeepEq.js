

load(libdir + "asserts.js");

function assertNotDeepEq(a, b, options) {
    assertThrowsInstanceOf(() => assertDeepEq(a, b, options), Error);
}


assertDeepEq(undefined, undefined);
assertDeepEq("1", "1");
assertNotDeepEq(1, "1");
assertNotDeepEq(undefined, null);
assertNotDeepEq({}, null);


assertDeepEq(Symbol(), Symbol());
assertNotDeepEq(Symbol(), Symbol(""));
assertDeepEq(Symbol("tweedledum"), Symbol("tweedledum"));
assertNotDeepEq(Symbol("tweedledum"), Symbol("alice"));
assertNotDeepEq(Symbol("what-its-called"), Symbol.for("what-its-called"));
assertNotDeepEq(Symbol.iterator, Symbol.for("Symbol.iterator"));
assertDeepEq([Symbol(), Symbol(), Symbol()],
             [Symbol(), Symbol(), Symbol()]);
var sym = Symbol();
assertDeepEq([sym, sym], [sym, sym]);
assertNotDeepEq([sym, sym], [Symbol(), Symbol()]);
assertNotDeepEq([sym, sym], [Symbol(), sym]);
var obj1 = {}, obj2 = {};
obj1[Symbol("x")] = "y";
obj2[Symbol("x")] = "y";
assertDeepEq(obj1, obj2);


assertDeepEq({}, {});
assertDeepEq({one: 1, two: 2}, {one: 1, two: 2});
assertNotDeepEq(Object.freeze({}), {});
assertDeepEq(Object.create(null), Object.create(null));
assertNotDeepEq(Object.create(null, {a: {configurable: false, value: 3}}),
               Object.create(null, {a: {configurable: true, value: 3}}));
assertNotDeepEq({one: 1}, {one: 1, two: 2});
assertNotDeepEq({yes: true}, {oui: true});
assertNotDeepEq({zero: 0}, {zero: "0"});


var x = {}, y = {}, ax = [x];
assertDeepEq([ax, x], [ax, y]);  
assertNotDeepEq([ax, x], [ax, y], {strictEquivalence: true});
assertDeepEq([x, ax], [y, ax]);  
assertNotDeepEq([x, ax], [y, ax], {strictEquivalence: true});


assertNotDeepEq([x, y], [x, x]);
assertDeepEq([x, y], [x, y]);
assertDeepEq([y, x], [x, y]);


var x = {};
assertDeepEq(Object.create(x), Object.create(x));
assertDeepEq(Object.create({}), Object.create({})); 


assertDeepEq([], []);
assertNotDeepEq([], [1]);
assertDeepEq([1], [1]);
assertNotDeepEq([0], [1]);
assertDeepEq([1, 2, 3], [1, 2, 3]);
assertNotDeepEq([1, , 3], [1, undefined, 3]);
var p = [], q = [];
p.prop = 1;
assertNotDeepEq(p, q);
assertNotDeepEq(q, p);
q.prop = 1;
assertDeepEq(q, p);


assertNotDeepEq(() => 1, () => 2);
assertNotDeepEq((...x) => 1, x => 1);
assertNotDeepEq(function f(){}, function g(){});

var [f1, f2] = [function () {}, function () {}];
assertDeepEq(f1, f1);
assertDeepEq(f1, f2);  
f1.prop = 1;
assertNotDeepEq(f1, f2);
f2.prop = 1;
assertDeepEq(f1, f2);


var a = [], b = [];
a[0] = a;
b[0] = b;
assertDeepEq(a, b);
a[0] = b;
assertNotDeepEq(a, b);  
b[0] = a;
assertDeepEq(a, b);
b[0] = [a];  
assertDeepEq(a, b);


var x = {};
assertDeepEq({x: x}, {x: x});
var y = [x];
assertDeepEq([y], [y]);


var g1 = newGlobal({newCompartment: true}), g2 = newGlobal({newCompartment: true});
assertDeepEq(g1, g2);
assertDeepEq(g1, g2, {strictEquivalence: true});
Object.preventExtensions(g2.Math.abs);  
assertNotDeepEq(g1, g2);
