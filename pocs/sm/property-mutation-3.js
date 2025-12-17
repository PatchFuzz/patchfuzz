function test() {
  print(getFuseState().ArrayPrototypeIteratorFuse.intact, true);

  
  let proto = Array.prototype;
  let desc = Object.getOwnPropertyDescriptor(proto, Symbol.iterator);
  Object.defineProperty(proto, Symbol.iterator, desc);  
  print(getFuseState().ArrayPrototypeIteratorFuse.intact, true);

  
  desc.get = desc.value;
  delete desc.value;
  delete desc.writable;
  Object.defineProperty(proto, Symbol.iterator, desc);
  print(getFuseState().ArrayPrototypeIteratorFuse.intact, false);
}
test();
