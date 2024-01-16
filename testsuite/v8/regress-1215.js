






























var desc = Object.getOwnPropertyDescriptor(Error.prototype, 'message');

assertEquals(desc.writable, true);
assertEquals(desc.enumerable, false);
assertEquals(desc.configurable, true);
