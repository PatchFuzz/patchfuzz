function test() {
  print(getFuseState().ArrayPrototypeIteratorFuse.intact, true);

  
  
  let proto = Array.prototype;
  for (let i = 0; i < 3; i++) {
    for (let p of Reflect.ownKeys(proto)) {
      let desc = Object.getOwnPropertyDescriptor(proto, p);
      if (desc.configurable) {
        
        desc.enumerable = !desc.enumerable;
        Object.defineProperty(proto, p, desc);  
      }
    }
  }
  print(getFuseState().ArrayPrototypeIteratorFuse.intact, true);

  
  let desc = Object.getOwnPropertyDescriptor(proto, Symbol.iterator);
  desc.value = function() {};
  Object.defineProperty(proto, Symbol.iterator, desc);  
  print(getFuseState().ArrayPrototypeIteratorFuse.intact, false);
}
test();
