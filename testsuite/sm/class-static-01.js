
load(libdir + "asserts.js");


class A {
  static { }
};


var ran = false;
class B {
  static {
    ran = true;
  }
};

assertEq(ran, true);


var res;
class C {
  static x = 10;
  static {
    res = this.x;
  }
};

assertEq(res, 10);


class D {
  static { }
  static { }
};

class D1 {
  static { } static { }
};


class E {
  static {
    res = 10;
  }
  static {
    assertEq(res, 10);
    res = 14;
  }
}

assertEq(res, 14);



let accessor;
class F {
  #x = 10
  static {
    accessor = (o) => o.#x;
  }
}

let f = new F;
assertEq(accessor(f), 10);

class G {
  static {
    this.a = 10;
  }
}
assertEq(G.a, 10);


class H {
  static a() { return 101; }
}

class I extends H {
  static {
    res = super.a();
  }
}

assertEq(res, 101);


class J {
  static {
    this.x = 12;
  }
}

assertEq(J.x, 12);


function assertThrowsSyntaxError(str) {
  assertThrowsInstanceOf(() => eval(str), SyntaxError);       
  assertThrowsInstanceOf(() => (1, eval)(str), SyntaxError);  
  assertThrowsInstanceOf(() => Function(str), SyntaxError);   
}

assertThrowsSyntaxError(`
class X {
  static {
    arguments;
  }
}
`)


assertThrowsSyntaxError(`
class X extends class {} {
  static {
    super(); 
  }
}
`)

assertThrowsSyntaxError(`
class X {
  static {
    return 10; 
  }
}
`)

assertThrowsSyntaxError(`
class X {
  static {
    await 10; 
  }
}
`)





assertThrowsSyntaxError(`
async function f() {
  class X {
    static {
      await 10; 
    }
  }
}
`)


assertThrowsSyntaxError(`
class X {
  static {
    yield 10; 
  }
}
`)


assertThrowsSyntaxError(`
function* gen() {
  class X {
    static {
      yield 10; 
    }
  }
}
`)


assertThrowsSyntaxError(`
class A { static { this.x
`)