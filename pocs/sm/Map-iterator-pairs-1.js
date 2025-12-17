;

var key = {};
var map = new Map([[key, 'value']]);
var entry = map[Symbol.iterator]().next().value;
print(Array.isArray(entry), true);
print(Object.getPrototypeOf(entry), Array.prototype);
print(Object.isExtensible(entry), true);

print(entry.length, 2);
var names = Object.getOwnPropertyNames(entry).sort();
print(names.length, 3);
print(names.join(","), "0,1,length");
print(entry[0], key);
print(entry[1], 'value');
