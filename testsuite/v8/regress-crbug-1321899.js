



class A {
  constructor(arg) {
    return arg;
  }
}

class B extends A {
  #b = 1;  
  constructor(arg) {
    super(arg);
  }
  static setField(obj) {
    obj.#b = 'b';  
  }
  static getField(obj) {
    return obj.#b;
  }
  static hasField(obj) {
    return #b in obj;
  }
}

class C extends A {
  #c;  
  constructor(arg) {
    super(arg);
  }
  static setField(obj) {
    obj.#c = 'c';  
  }
  static getField(obj) {
    return obj.#c;
  }
  static hasField(obj) {
    return #c in obj;
  }
}

let d = 0;
class D extends A {
  get #d() { return d; }
  set #d(val) { d = val; }
  constructor(arg) {
    super(arg);  
  }
  static setAccessor(obj) {
    obj.#d = 'd';  
  }
  static getAccessor(obj) {
    return obj.#d;  
  }
  static hasAccessor(obj) {
    return #d in obj;
  }
}

class E extends A {
  #e() { return 0; }
  constructor(arg) {
    super(arg);  
  }
  static setMethod(obj) {
    obj.#e = 'e';  
  }
  static getMethod(obj) {
    return obj.#e;  
  }
  static hasMethod(obj) {
    return #e in obj;
  }
}

function checkHasAccess(object) {
  assertThrows(() => B.setField(globalProxy), TypeError, /Cannot write private member #b to an object whose class did not declare it/);
  assertThrows(() => B.getField(globalProxy), TypeError, /Cannot read private member #b from an object whose class did not declare it/);
  assertFalse(B.hasField(globalProxy));

  new B(globalProxy);
  assertEquals(B.getField(globalProxy), 1);
  B.setField(globalProxy);
  assertEquals(B.getField(globalProxy), 'b');  
  B.setField(globalProxy);  
  assertEquals(B.getField(globalProxy), 'b');  
  assertThrows(() => new B(globalProxy), TypeError, /Cannot initialize #b twice on the same object/);
  assertTrue(B.hasField(globalProxy));
  assertTrue(B.hasField(globalProxy));  

  assertThrows(() => C.setField(globalProxy), TypeError, /Cannot write private member #c to an object whose class did not declare it/);
  assertThrows(() => C.getField(globalProxy), TypeError, /Cannot read private member #c from an object whose class did not declare it/);
  assertFalse(C.hasField(globalProxy));

  new C(globalProxy);
  assertEquals(C.getField(globalProxy), undefined);
  C.setField(globalProxy);
  assertEquals(C.getField(globalProxy), 'c');  
  C.setField(globalProxy);  
  assertEquals(C.getField(globalProxy), 'c');  
  assertThrows(() => new C(globalProxy), TypeError, /Cannot initialize #c twice on the same object/);
  assertTrue(C.hasField(globalProxy));
  assertTrue(C.hasField(globalProxy));  

  assertThrows(() => D.setAccessor(globalProxy), TypeError, /Receiver must be an instance of class D/);
  assertThrows(() => D.getAccessor(globalProxy), TypeError, /Receiver must be an instance of class D/);
  assertFalse(D.hasAccessor(globalProxy));

  new D(globalProxy);
  assertEquals(D.getAccessor(globalProxy), 0);
  D.setAccessor(globalProxy);
  assertEquals(D.getAccessor(globalProxy), 'd');  
  D.setAccessor(globalProxy);  
  assertEquals(D.getAccessor(globalProxy), 'd');  
  assertThrows(() => new D(globalProxy), TypeError, /Cannot initialize private methods of class D twice on the same object/);
  assertTrue(D.hasAccessor(globalProxy));
  assertTrue(D.hasAccessor(globalProxy));  

  assertThrows(() => E.setMethod(globalProxy), TypeError, /Receiver must be an instance of class E/);
  assertThrows(() => E.getMethod(globalProxy), TypeError, /Receiver must be an instance of class E/);
  assertFalse(E.hasMethod(globalProxy));

  new E(globalProxy);
  assertEquals(E.getMethod(globalProxy)(), 0);
  assertThrows(() => E.setMethod(globalProxy), TypeError, /Private method '#e' is not writable/);
  assertEquals(E.getMethod(globalProxy)(), 0);  
  assertThrows(() => new E(globalProxy), TypeError, /Cannot initialize private methods of class E twice on the same object/);
  assertTrue(E.hasMethod(globalProxy));
  assertTrue(E.hasMethod(globalProxy));  
}

function checkNoAccess(object, message) {
  assertThrows(() => new B(object), Error, message);
  assertThrows(() => new C(object), Error, message);
  assertThrows(() => new D(object), Error, message);
  assertThrows(() => new E(object), Error, message);
  assertThrows(() => B.setField(object), Error, message);
  assertThrows(() => B.getField(object), Error, message);
  assertThrows(() => B.hasField(object), Error, message);
  assertThrows(() => C.setField(object), Error, message);
  assertThrows(() => C.getField(object), Error, message);
  assertThrows(() => C.hasField(object), Error, message);
  assertThrows(() => D.setAccessor(object), Error, message);
  assertThrows(() => D.getAccessor(object), Error, message);
  assertThrows(() => D.hasAccessor(object), Error, message);
  assertThrows(() => E.setMethod(object), Error, message);
  assertThrows(() => E.getMethod(object), Error, message);
  assertThrows(() => E.hasMethod(object), Error, message);
}

function checkNoAccessNoThrow(object) {
  
  
  
  new B(object);
  new C(object);
  new D(object);
  new E(object);
  B.setField(object);
  assertEquals(undefined, B.getField(object));
  assertFalse(B.hasField(object));
  C.setField(object);
  assertEquals(undefined, C.getField(object));
  assertFalse(C.hasField(object));
  D.setAccessor(object)
  assertEquals("d", D.getAccessor(object));
  assertFalse(D.hasAccessor(object));
  assertThrows(() => E.setMethod(object), TypeError, /Private method '#e' is not writable/);
  assertEquals(0, E.getMethod(object)());
  assertFalse(E.hasMethod(object));
}
