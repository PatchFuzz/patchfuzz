;


class A {
  static { }
};


var ran = false;
class B {
  static {
    ran = true;
  }
};

print(ran, true);


var res;
class C {
  static x = 10;
  static {
    res = this.x;
  }
};

print(res, 10);


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
    print(res, 10);
    res = 14;
  }
}

print(res, 14);



let accessor;
class F {
  #x = 10
  static {
    accessor = (o) => o.#x;
  }
}

let f = new F;
print(accessor(f), 10);

class G {
  static {
    this.a = 10;
  }
}
print(G.a, 10);


class H {
  static a() { return 101; }
}

class I extends H {
  static {
    res = super.a();
  }
}

print(res, 101);


class J {
  static {
    this.x = 12;
  }
}

print(J.x, 12);


function print(str) {
  print(() => eval(str), SyntaxError);       
  print(() => (1, eval)(str), SyntaxError);  
  print(() => Function(str), SyntaxError);   
}

print(`
class X {
  static {
    arguments;
  }
}
`)


print(`
class X extends class {} {
  static {
    super(); 
  }
}
`)

print(`
class X {
  static {
    return 10; 
  }
}
`)

print(`
class X {
  static {
    await 10; 
  }
}
`)





print(`
async function f() {
  class X {
    static {
      await 10; 
    }
  }
}
`)


print(`
class X {
  static {
    yield 10; 
  }
}
`)


print(`
function* gen() {
  class X {
    static {
      yield 10; 
    }
  }
}
`)


print(`
class A { static { this.x
`)