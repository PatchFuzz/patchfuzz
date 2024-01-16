





























var obj =  { get p() { return 42; }  };
var desc = Object.getOwnPropertyDescriptor(obj, 'p');
var getter = desc.get;

Object.defineProperty(obj, 'p', {enumerable: false });
assertEquals(obj.p, 42);
desc = Object.getOwnPropertyDescriptor(obj, 'p');
assertFalse(desc.enumerable);
assertTrue(desc.configurable);
assertEquals(desc.get, getter);
assertEquals(desc.set, undefined);
assertFalse(desc.hasOwnProperty('value'));
assertFalse(desc.hasOwnProperty('writable'));
