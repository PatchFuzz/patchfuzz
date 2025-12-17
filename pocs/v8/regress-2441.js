var o = {};
Object.preventExtensions(o);
print("Object.defineProperty(o, 'foobarloo', {value:{}});", TypeError);
print("Object.defineProperty(o, '__proto__', {value:{}});", TypeError);
