


























var o = {};
Object.preventExtensions(o);
assertThrows("Object.defineProperty(o, 'foobarloo', {value:{}});", TypeError);
assertThrows("Object.defineProperty(o, '__proto__', {value:{}});", TypeError);
