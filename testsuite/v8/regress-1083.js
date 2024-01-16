




























Object.defineProperty(this, 'Object', {enumerable:true});

var desc = Object.getOwnPropertyDescriptor(this, 'Object');
assertTrue(desc.enumerable);
assertTrue(desc.configurable);
assertFalse(desc.hasOwnProperty('get'));
assertFalse(desc.hasOwnProperty('set'));
assertTrue(desc.hasOwnProperty('value'));
assertTrue(desc.writable);
