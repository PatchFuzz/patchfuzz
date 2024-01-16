assertEq('WeakRef' in this, true);

function checkPropertyDescriptor(obj, property, writable, enumerable,
                                 configurable) {
  let desc = Object.getOwnPropertyDescriptor(obj, property);
  assertEq(typeof desc, "object");
  assertEq(desc.writable, writable);
  assertEq(desc.enumerable, enumerable);
  assertEq(desc.configurable, configurable);
}

function assertThrowsTypeError(thunk) {
  let error;
  try {
      thunk();
  } catch (e) {
      error = e;
  }
  assertEq(error instanceof TypeError, true);
}

assertEq(typeof this.WeakRef, "function");





assertThrowsTypeError(() => new WeakRef());



assertThrowsTypeError(() => new WeakRef(1));
assertThrowsTypeError(() => new WeakRef(true));
assertThrowsTypeError(() => new WeakRef("string"));
assertThrowsTypeError(() => new WeakRef(Symbol()));
assertThrowsTypeError(() => new WeakRef(null));
assertThrowsTypeError(() => new WeakRef(undefined));
new WeakRef({});




assertEq(Object.getPrototypeOf(WeakRef), Function.prototype);






checkPropertyDescriptor(WeakRef, 'prototype', false, false, false);




let proto = WeakRef.prototype;
assertEq(Object.getPrototypeOf(proto), Object.prototype);




assertEq(proto.constructor, WeakRef);



assertEq(proto.hasOwnProperty('deref'), true);
assertEq(typeof proto.deref, 'function');






assertEq(proto[Symbol.toStringTag], "WeakRef");
checkPropertyDescriptor(proto, Symbol.toStringTag, false, false, true);




let weakRef = new WeakRef({});
assertEq(Object.getPrototypeOf(weakRef), proto);

