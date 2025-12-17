let array = [];
Object.defineProperty(array, 'length', {writable: false});

print(array.length, 0);
print(() => array.shift(), TypeError);

let object = { length: 0 };
Object.defineProperty(object, 'length', {writable: false});

print(object.length, 0);
print(() => Array.prototype.shift.call(object));
