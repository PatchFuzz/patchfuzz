;
;

print(() => Math.sin(...true), TypeError);
print(() => Math.sin(...false), TypeError);
print(() => Math.sin(...new Date()), TypeError);
print(() => Math.sin(...Function("")), TypeError);
print(() => Math.sin(...function () {}), TypeError);
print(() => Math.sin(...(x => x)), TypeError);
print(() => Math.sin(...1), TypeError);
print(() => Math.sin(...{}), TypeError);
var foo = {}

foo[Symbol.iterator] = 10;
print(() => Math.sin(...foo), TypeError);

foo[Symbol.iterator] = function() { return undefined; };
print(() => Math.sin(...foo), TypeError);

foo[Symbol.iterator] = function() { return this; };
print(() => Math.sin(...foo), TypeError);

foo[Symbol.iterator] = function() { return this; };
foo.next = function() { throw 10; };
print(() => Math.sin(...foo), 10);

print(() => Math.sin(.../a/), TypeError);
print(() => Math.sin(...new Error()), TypeError);
