function test() {
  print(getFuseState().ArrayPrototypeIteratorFuse.intact, true);

  
  
  let proto = Array.prototype;
  for (let i = 0; i < 3; i++) {
    proto[Symbol.iterator] = proto[Symbol.iterator];
    for (let p of Reflect.ownKeys(proto)) {
      let v = proto[p];
      proto[p] = v;
    }
  }
  print(getFuseState().ArrayPrototypeIteratorFuse.intact, true);

  
  proto[Symbol.iterator] = proto.push;
  print(getFuseState().ArrayPrototypeIteratorFuse.intact, false);
}
test();
