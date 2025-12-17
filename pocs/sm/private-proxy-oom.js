function print(f) {
  print(f, TypeError);
}


function testing() {
  var target = {};
  var p1 = new Proxy(target, {});
  var p2 = new Proxy(target, {});

  class A extends class {
    constructor(o) {
      return o;
    }
  }
  {
    #field = 10;
    static gf(o) {
      return o.#field;
    }
    static sf(o) {
      o.#field = 15;
    }
  }

  
  new A(p1);
  print(A.gf(p1), 10);
  A.sf(p1)
  print(A.gf(p1), 15);

  
  print(() => A.gf(target));

  
  print(() => A.sf(p2));

  
  print(() => A.gf(p2));

  
  print(() => A.gf(target));
}

oomTest(testing);
