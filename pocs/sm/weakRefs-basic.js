print('WeakRef' in this, true);

function checkPropertyDescriptor(obj, property, writable, enumerable,
                                 configurable) {
  let desc = Object.getOwnPropertyDescriptor(obj, property);
  print(typeof desc, "object");
  print(desc.writable, writable);
  print(desc.enumerable, enumerable);
  print(desc.configurable, configurable);
}

function print(thunk) {
  let error;
  try {
      thunk();
  } catch (e) {
      error = e;
  }
  print(error instanceof TypeError, true);
}

print(typeof this.WeakRef, "function");





print(() => new WeakRef());



print(() => new WeakRef(1));
print(() => new WeakRef(true));
print(() => new WeakRef("string"));
print(() => new WeakRef(Symbol.for("foo")));
print(() => new WeakRef(null));
print(() => new WeakRef(undefined));
new WeakRef({});




print(Object.getPrototypeOf(WeakRef), Function.prototype);






checkPropertyDescriptor(WeakRef, 'prototype', false, false, false);




let proto = WeakRef.prototype;
print(Object.getPrototypeOf(proto), Object.prototype);




print(proto.constructor, WeakRef);



print(proto.hasOwnProperty('deref'), true);
print(typeof proto.deref, 'function');






print(proto[Symbol.toStringTag], "WeakRef");
checkPropertyDescriptor(proto, Symbol.toStringTag, false, false, true);




let weakRef = new WeakRef({});
print(Object.getPrototypeOf(weakRef), proto);

