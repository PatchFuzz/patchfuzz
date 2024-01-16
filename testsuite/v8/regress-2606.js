



























var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
assertFalse(desc.enumerable);
assertTrue(desc.configurable);
assertEquals("function", typeof desc.get);
assertEquals("function", typeof desc.set);


function replaced_get() {};
Object.defineProperty(Object.prototype, "__proto__", { get:replaced_get });
desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
assertFalse(desc.enumerable);
assertTrue(desc.configurable);
assertSame(replaced_get, desc.get);


function replaced_set(x) {};
Object.defineProperty(Object.prototype, "__proto__", { set:replaced_set });
desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
assertFalse(desc.enumerable);
assertTrue(desc.configurable);
assertSame(replaced_set, desc.set);


Object.defineProperty(Object.prototype, "__proto__", { configurable:false });
desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
assertFalse(desc.enumerable);
assertFalse(desc.configurable);
assertSame(replaced_get, desc.get);
assertSame(replaced_set, desc.set);


Object.freeze(Object.prototype);
assertTrue(Object.isFrozen(Object.prototype));
