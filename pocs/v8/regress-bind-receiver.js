function strict() { 'use strict'; return this; }
function lenient() { return this; }
var obj = {};

print(true, strict.bind(true)());
print(42, strict.bind(42)());
print("", strict.bind("")());
print(null, strict.bind(null)());
print(undefined, strict.bind(undefined)());
print(obj, strict.bind(obj)());

print(true, lenient.bind(true)() instanceof Boolean);
print(true, lenient.bind(42)() instanceof Number);
print(true, lenient.bind("")() instanceof String);
print(this, lenient.bind(null)());
print(this, lenient.bind(undefined)());
print(obj, lenient.bind(obj)());
