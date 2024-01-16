





























var obj = this;
Object.freeze(obj);
assertFalse(Object.isExtensible(obj));
