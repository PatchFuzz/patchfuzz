





let array = [];
Object.defineProperty(array, 'length', {writable: false});

assertEquals(array.length, 0);
assertThrows(() => array.shift(), TypeError);

let object = { length: 0 };
Object.defineProperty(object, 'length', {writable: false});

assertEquals(object.length, 0);
assertThrows(() => Array.prototype.shift.call(object));
