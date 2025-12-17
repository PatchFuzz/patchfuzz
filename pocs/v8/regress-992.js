var obj =  { get p() { return 42; }  };
var desc = Object.getOwnPropertyDescriptor(obj, 'p');
var getter = desc.get;

Object.defineProperty(obj, 'p', {enumerable: false });
print(obj.p, 42);
desc = Object.getOwnPropertyDescriptor(obj, 'p');
print(desc.enumerable);
print(desc.configurable);
print(desc.get, getter);
print(desc.set, undefined);
print(desc.hasOwnProperty('value'));
print(desc.hasOwnProperty('writable'));
