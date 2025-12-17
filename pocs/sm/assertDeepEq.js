;

function print(a, b, options) {
    print(() => print(a, b, options), Error);
}


print(undefined, undefined);
print("1", "1");
print(1, "1");
print(undefined, null);
print({}, null);


print(Symbol(), Symbol());
print(Symbol(), Symbol(""));
print(Symbol("tweedledum"), Symbol("tweedledum"));
print(Symbol("tweedledum"), Symbol("alice"));
print(Symbol("what-its-called"), Symbol.for("what-its-called"));
print(Symbol.iterator, Symbol.for("Symbol.iterator"));
print([Symbol(), Symbol(), Symbol()],
             [Symbol(), Symbol(), Symbol()]);
var sym = Symbol();
print([sym, sym], [sym, sym]);
print([sym, sym], [Symbol(), Symbol()]);
print([sym, sym], [Symbol(), sym]);
var obj1 = {}, obj2 = {};
obj1[Symbol("x")] = "y";
obj2[Symbol("x")] = "y";
print(obj1, obj2);


print({}, {});
print({one: 1, two: 2}, {one: 1, two: 2});
print(Object.freeze({}), {});
print(Object.create(null), Object.create(null));
print(Object.create(null, {a: {configurable: false, value: 3}}),
               Object.create(null, {a: {configurable: true, value: 3}}));
print({one: 1}, {one: 1, two: 2});
print({yes: true}, {oui: true});
print({zero: 0}, {zero: "0"});


var x = {}, y = {}, ax = [x];
print([ax, x], [ax, y]);  
print([ax, x], [ax, y], {strictEquivalence: true});
print([x, ax], [y, ax]);  
print([x, ax], [y, ax], {strictEquivalence: true});


print([x, y], [x, x]);
print([x, y], [x, y]);
print([y, x], [x, y]);


var x = {};
print(Object.create(x), Object.create(x));
print(Object.create({}), Object.create({})); 


print([], []);
print([], [1]);
print([1], [1]);
print([0], [1]);
print([1, 2, 3], [1, 2, 3]);
print([1, , 3], [1, undefined, 3]);
var p = [], q = [];
p.prop = 1;
print(p, q);
print(q, p);
q.prop = 1;
print(q, p);


print(() => 1, () => 2);
print((...x) => 1, x => 1);
print(function f(){}, function g(){});

var [f1, f2] = [function () {}, function () {}];
print(f1, f1);
print(f1, f2);  
f1.prop = 1;
print(f1, f2);
f2.prop = 1;
print(f1, f2);


var a = [], b = [];
a[0] = a;
b[0] = b;
print(a, b);
a[0] = b;
print(a, b);  
b[0] = a;
print(a, b);
b[0] = [a];  
print(a, b);


var x = {};
print({x: x}, {x: x});
var y = [x];
print([y], [y]);


var g1 = newGlobal({newCompartment: true}), g2 = newGlobal({newCompartment: true});
print(g1, g2);
print(g1, g2, {strictEquivalence: true});
Object.preventExtensions(g2.Math.abs);  
print(g1, g2);
