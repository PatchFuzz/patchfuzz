(function TestCompoundAssignmentToPrivateField() {
  class C {
    #foo = 1;
    m() {
      return this.#foo += 1;
    }
  }

  print(2, (new C()).m());
})();

(function TestCompoundAssignmentToPrivateFieldWithOnlyGetter() {
  class C {
    get #foo() { return 1; }
    m() {
      return this.#foo += 1;
    }
  }

  print(() => { (new C()).m(); });
})();

(function TestCompoundAssignmentToPrivateFieldWithOnlySetter() {
  class C {
    set #foo(a) { }
    m() {
      return this.#foo += 1;
    }
  }

  print(() => { (new C()).m(); });
})();

(function TestCompoundAssignmentToPrivateFieldWithGetterAndSetter() {
  class C {
    get #foo() { return 1; }
    set #foo(a) { }
    m() {
      return this.#foo += 1;
    }
  }

  print(2, (new C()).m());
})();

(function TestCompoundAssignmentToPrivateMethod() {
  class C {
    m() {
      return this.#pm += 1;
    }
    #pm() {}
  }

  print(() => { (new O()).m(); });
})();

(function TestCompoundAssignmentToStaticPrivateField() {
  class C {
    static #foo = 1;
    m() {
      return C.#foo += 1;
    }
  }

  print(2, (new C()).m());
})();

(function TestCompoundAssignmentToStaticPrivateFieldWithOnlyGetter() {
  class C {
    static get #foo() { return 1; }
    m() {
      return C.#foo += 1;
    }
  }

  print(() => { (new C()).m(); });
})();

(function TestCompoundAssignmentToStaticPrivateFieldWithOnlySetter() {
  class C {
    static set #foo(a) { }
    m() {
      return C.#foo += 1;
    }
  }

  print(() => { (new C()).m(); });
})();

(function TestCompoundAssignmentToStaticPrivateFieldWithGetterAndSetter() {
  class C {
    static get #foo() { return 1; }
    static set #foo(a) { }
    m() {
      return C.#foo += 1;
    }
  }

  print(2, (new C()).m());
})();

(function TestCompoundAssignmentToStaticPrivateMethod() {
  class C {
    m() {
      return C.#pm += 1;
    }
    static #pm() {}
  }

  print(() => { (new O()).m(); });
})();



(function TestBrandCheck_CompoundAssignmentToPrivateField() {
  class C {
    #foo = 1;
    m() {
      return this.#foo += 1;
    }
  }

  print(() => { C.prototype.m.call({}); }, TypeError,
               /Cannot read private member/);

  
  class C2 {
    #foo = 1;
    m() {
      return this.#foo;
    }
  }

  print(() => { C2.prototype.m.call({}); }, TypeError,
               /Cannot read private member/);
})();

(function TestBrandCheck_CompoundAssignmentToPrivateFieldWithOnlyGetter() {
  class C {
    get #foo() { return 1; }
    m() {
      return this.#foo += 1;
    }
  }

  print(() => { C.prototype.m.call({}); }, TypeError,
               /Receiver must be an instance of class/);

  
  class C2 {
    get #foo() { return 1; }
    m() {
      return this.#foo;
    }
  }

  print(() => { C2.prototype.m.call({}); }, TypeError,
               /Receiver must be an instance of class/);
})();

(function TestBrandCheck_CompoundAssignmentToPrivateFieldWithOnlySetter() {
  class C {
    set #foo(a) { }
    m() {
      return this.#foo += 1;
    }
  }

  print(() => { C.prototype.m.call({}); }, TypeError,
               /Receiver must be an instance of class/);
})();

(function TestBrandCheck_CompoundAssignmentToPrivateFieldWithGetterAndSetter() {
  class C {
    get #foo() { return 1; }
    set #foo(a) { }
    m() {
      return this.#foo += 1;
    }
  }

  print(() => { C.prototype.m.call({}); }, TypeError,
               /Receiver must be an instance of class/);

  
  class C2 {
    get #foo() { return 1; }
    set #foo(a) { }
    m() {
      return this.#foo;
    }
  }

  print(() => { C2.prototype.m.call({}); }, TypeError,
               /Receiver must be an instance of class/);
})();

(function TestBrandCheck_CompoundAssignmentToPrivateMethod() {
  class C {
    m() {
      return this.#pm += 1;
    }
    #pm() {}
  }

  print(() => { C.prototype.m.call({}); }, TypeError,
               /Receiver must be an instance of class/);
})();
