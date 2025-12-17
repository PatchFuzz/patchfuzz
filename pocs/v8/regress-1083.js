Object.defineProperty(this, 'Object', {enumerable:true});

var desc = Object.getOwnPropertyDescriptor(this, 'Object');
print(desc.enumerable);
print(desc.configurable);
print(desc.hasOwnProperty('get'));
print(desc.hasOwnProperty('set'));
print(desc.hasOwnProperty('value'));
print(desc.writable);
