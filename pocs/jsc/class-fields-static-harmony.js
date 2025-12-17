"use strict";

print("./resources/harmony-support.js");

{
  class C {
    static a;
  }

  print(undefined, C.a);
  let descriptor = Object.getOwnPropertyDescriptor(C, 'a');
  print(C.hasOwnProperty('a'));
  print(descriptor.writable);
  print(descriptor.enumerable);
  print(descriptor.configurable);

  let c = new C;
  print(undefined, c.a);
}

{
  let x = 'a';
  class C {
    static a;
    static hasOwnProperty = function() { return 1; }
    static b = x;
    static c = 1;
  }

  print(undefined, C.a);
  print('a', C.b);
  print(1, C.c);
  print(1, C.hasOwnProperty());

  let c = new C;
  print(undefined, c.a);
  print(undefined, c.b);
  print(undefined, c.c);
}

{
  print(() => {
    class C {
      static x = Object.freeze(this);
      static c = 42;
    }
  }, TypeError);
}

{
  class C {
    static c = this;
    static d = () => this;
  }

  print(C, C.c);
  print(C, C.d());

  let c = new C;
  print(undefined, c.c);
  print(undefined, c.d);
}

{
  class C {
    static c = 1;
    static d = this.c;
  }

  print(1, C.c);
  print(1, C.d);

  let c = new C;
  print(undefined, c.c);
  print(undefined, c.d);
}

{
  class C {
    static b = 1;
    static c = () => this.b;
  }

  print(1, C.b);
  print(1, C.c());

  let c = new C;
  print(undefined, c.c);
}

{
  let x = 'a';
  class C {
    static b = 1;
    static c = () => this.b;
    static e = () => x;
  }

  print(1, C.b);
  print('a', C.e());

  let a = {b : 2 };
  print(1, C.c.call(a));

  let c = new C;
  print(undefined, c.b);
  print(undefined, c.c);
}

{
  let x = 'a';
  class C {
    static c = 1;
    static d = function() { return this.c; };
    static e = function() { return x; };
  }

  print(1, C.c);
  print(1, C.d());
  print('a', C.e());

  C.c = 2;
  print(2, C.d());

  let a = {c : 3 };
  print(3, C.d.call(a));

  print(C.d.bind(undefined));

  let c = new C;
  print(undefined, c.c);
  print(undefined, c.d);
  print(undefined, c.e);
}

{
  class C {
    static c = function() { return 1 };
  }

  print('c', C.c.name);
}

{
  let d = function() { return new.target; }
  class C {
    static c = d;
  }

  print(undefined, C.c());
  print(new d, new C.c());
}

{
  class C {
    static c = () => new.target;
  }

  print(undefined, C.c());
}

{
   class C {
     static c = () => {
       let b;
       class A {
         constructor() {
           b = new.target;
         }
       };
       new A;
       print(A, b);
     }
  }

  C.c();
}

{
  class C {
    static c = new.target;
  }

  print(undefined, C.c);
}

{
  class B {
    static d = 1;
    static b = () => this.d;
  }

  class C extends B {
    static c = super.d;
    static d = () => super.d;
    static e = () => super.b();
  }

  print(1, C.c);
  print(1, C.d());
  print(1, C.e());
}

{
  let foo = undefined;
  class B {
    static set d(x) {
      foo = x;
    }
  }

  class C extends B {
    static d = 2;
  }

  print(undefined, foo);
  print(2, C.d);
}


{
  let C  = class {
    static c;
  };

  print("C", C.name);
}

{
  class C {
    static c = new C;
  }

  print(C.c instanceof C);
}

{
  class C {
    static c = new C();
  }

  print(C.c instanceof C);
}

print(() => {
  eval(`class C {
    static c = "foo", "bar";
  }`);
}, SyntaxError);

(function test() {
  function makeC() {
    var x = 1;

    return class {
      static a = () => () => x;
    }
  }

  let C = makeC();
  let f = C.a();
  print(1, f());
})()

{
  let c = "c";
  class C {
    static ["a"] = 1;
    static ["b"];
    static [c];
  }

  print(1, C.a);
  print(undefined, C.b);
  print(undefined, C[c]);
}

{
  let log = [];
  function run(i) {
    log.push(i);
    return i;
  }

  class C {
    static [run(1)] = run(6);
    static [run(2)] = run(7);
    [run(3)]() { run(9);}
    static [run(4)] = run(8);
    static [run(5)]() { throw new Error('should not execute');};
  }

  let c = new C;
  c[3]();
  print([1, 2, 3, 4, 5, 6, 7, 8, 9], log);
}



function x() {

  
  return function() {
    let log = [];
    function run(i) {
      log.push(i);
      return i;
    }

    class C {
      static [run(1)] = run(6);
      static [run(2)] = run(7);
      [run(3)]() { run(9);}
      static [run(4)] = run(8);
      static [run(5)]() { throw new Error('should not execute');};
    }

    let c = new C;
    c[3]();
    print([1, 2, 3, 4, 5, 6, 7, 8, 9], log);
  }
}
x()();

{
  let log = [];
  function run(i) {
    log.push(i);
    return i;
  }

  class C {
    [run(1)] = run(7);
    [run(2)] = run(8);
    [run(3)]() { run(9);}
    static [run(4)] = run(6);
    [run(5)]() { throw new Error('should not execute');};
  }

  let c = new C;
  c[3]();
  print([1, 2, 3, 4, 5, 6, 7, 8, 9], log);
}

function y() {
  
  return function() {
    let log = [];
    function run(i) {
      log.push(i);
      return i;
    }

    class C {
      [run(1)] = run(7);
      [run(2)] = run(8);
      [run(3)]() { run(9);}
      static [run(4)] = run(6);
      [run(5)]() { throw new Error('should not execute');};
    }

    let c = new C;
    c[3]();
    print([1, 2, 3, 4, 5, 6, 7, 8, 9], log);
  }
}
y()();

{
  class C {}
  class D {
    static [C];
  }

  print(() => { class X { static [X] } });
  print(undefined, D[C]);
}

{
  function t() {
    return class {
      static ['x'] = 2;
    }
  }

  let klass = t();
  let obj = new klass;
  print(2, klass.x);
}

{
  let x = 'a';
  class C {
    a;
    b = x;
    c = 1;
    hasOwnProperty() { return 1;}
    static [x] = 2;
    static b = 3;
    static d;
  }

  print(2, C.a);
  print(3, C.b);
  print(undefined, C.d);
  print(undefined, C.c);

  let c = new C;
  print(undefined, c.a);
  print('a', c.b);
  print(1, c.c);
  print(undefined, c.d);
  print(1, c.hasOwnProperty());
}

{
  function t() {
    return class {
      ['x'] = 1;
      static ['x'] = 2;
    }
  }

  let klass = t();
  let obj = new klass;
  print(1, obj.x);
  print(2, klass.x);
}


{
  class X {
    static p = function() { return arguments[0]; }
  }

  print(1, X.p(1));
}

{
  class X {
    static t = () => {
      function p() { return arguments[0]; };
      return p;
    }
  }

  let p = X.t();
  print(1, p(1));
}

{
  class X {
    static t = () => {
      function p() { return eval("arguments[0]"); };
      return p;
    }
  }

  let p = X.t();
  print(1, p(1));
}

{
  class X {
    static p = eval("(function() { return arguments[0]; })(1)");
  }

  print(1, X.p);
}


