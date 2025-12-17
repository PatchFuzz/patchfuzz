class B {
  constructor(obj) { return obj; }
}

class C extends B {
  #f = 1;
  static m(obj) {
    obj.#f = new C(obj);  
    print(obj.#f, obj);
  }
}

C.m({});
