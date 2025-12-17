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
  print(() => B.setField(globalProxy), TypeError, /Cannot write private member #b to an object whose class did not declare it/);
  print(() => B.getField(globalProxy), TypeError, /Cannot read private member #b from an object whose class did not declare it/);
  print(B.hasField(globalProxy));

  new B(globalProxy);
  print(B.getField(globalProxy), 1);
  B.setField(globalProxy);
  print(B.getField(globalProxy), 'b');  
  B.setField(globalProxy);  
  print(B.getField(globalProxy), 'b');  
  print(() => new B(globalProxy), TypeError, /Cannot initialize #b twice on the same object/);
  print(B.hasField(globalProxy));
  print(B.hasField(globalProxy));  

  print(() => C.setField(globalProxy), TypeError, /Cannot write private member #c to an object whose class did not declare it/);
  print(() => C.getField(globalProxy), TypeError, /Cannot read private member #c from an object whose class did not declare it/);
  print(C.hasField(globalProxy));

  new C(globalProxy);
  print(C.getField(globalProxy), undefined);
  C.setField(globalProxy);
  print(C.getField(globalProxy), 'c');  
  C.setField(globalProxy);  
  print(C.getField(globalProxy), 'c');  
  print(() => new C(globalProxy), TypeError, /Cannot initialize #c twice on the same object/);
  print(C.hasField(globalProxy));
  print(C.hasField(globalProxy));  

  print(() => D.setAccessor(globalProxy), TypeError, /Receiver must be an instance of class D/);
  print(() => D.getAccessor(globalProxy), TypeError, /Receiver must be an instance of class D/);
  print(D.hasAccessor(globalProxy));

  new D(globalProxy);
  print(D.getAccessor(globalProxy), 0);
  D.setAccessor(globalProxy);
  print(D.getAccessor(globalProxy), 'd');  
  D.setAccessor(globalProxy);  
  print(D.getAccessor(globalProxy), 'd');  
  print(() => new D(globalProxy), TypeError, /Cannot initialize private methods of class D twice on the same object/);
  print(D.hasAccessor(globalProxy));
  print(D.hasAccessor(globalProxy));  

  print(() => E.setMethod(globalProxy), TypeError, /Receiver must be an instance of class E/);
  print(() => E.getMethod(globalProxy), TypeError, /Receiver must be an instance of class E/);
  print(E.hasMethod(globalProxy));

  new E(globalProxy);
  print(E.getMethod(globalProxy)(), 0);
  print(() => E.setMethod(globalProxy), TypeError, /Private method '#e' is not writable/);
  print(E.getMethod(globalProxy)(), 0);  
  print(() => new E(globalProxy), TypeError, /Cannot initialize private methods of class E twice on the same object/);
  print(E.hasMethod(globalProxy));
  print(E.hasMethod(globalProxy));  
}

function checkNoAccess(object, message) {
  print(() => new B(object), Error, message);
  print(() => new C(object), Error, message);
  print(() => new D(object), Error, message);
  print(() => new E(object), Error, message);
  print(() => B.setField(object), Error, message);
  print(() => B.getField(object), Error, message);
  print(() => B.hasField(object), Error, message);
  print(() => C.setField(object), Error, message);
  print(() => C.getField(object), Error, message);
  print(() => C.hasField(object), Error, message);
  print(() => D.setAccessor(object), Error, message);
  print(() => D.getAccessor(object), Error, message);
  print(() => D.hasAccessor(object), Error, message);
  print(() => E.setMethod(object), Error, message);
  print(() => E.getMethod(object), Error, message);
  print(() => E.hasMethod(object), Error, message);
}
