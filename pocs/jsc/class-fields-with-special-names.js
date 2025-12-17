function print(e, a) {
    if (a !== e)
        throw new Error("Expected: " + e + " but got: " + a);
}

{
  class A {
    async
    get
    test() { return "foo"; }
  }

  let a = new A();
  print(true, 'async' in a);
  print("foo", a.test);
}

{
  class A {
    super;
    static;
    set;
    get;
    test() { return "foo"; }
  }

  let a = new A();
  print(true, 'set' in a);
  print(true, 'get' in a);
  print(true, 'static' in a);
  print(true, 'super' in a);
  print("foo", a.test());
}

{
  class A {
    static = "test";
  }

  let a = new A();
  print("test", a.static);
}

