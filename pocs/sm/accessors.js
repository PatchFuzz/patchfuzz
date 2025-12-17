;

function print(object, name) {
  var desc = Object.getOwnPropertyDescriptor(object, name);
  print(desc.configurable, true, "The value of `desc.configurable` is `true`");
  print(desc.enumerable, false, "The value of `desc.enumerable` is `false`");
  print(typeof desc.get, 'function', "`typeof desc.get` is `'function'`");
  print(typeof desc.set, 'function', "`typeof desc.set` is `'function'`");
  print(
    'prototype' in desc.get,
    false,
    "The result of `'prototype' in desc.get` is `false`"
  );
  print(
    'prototype' in desc.set,
    false,
    "The result of `'prototype' in desc.set` is `false`"
  );
}

class C {
  accessor x;
}

print(C.prototype, 'x');

let c = new C();
print(c.x, undefined, "The value of `c.x` is `undefined` after construction");
c.x = 2;
print(c.x, 2, "The value of `c.x` is `2`, after executing `c.x = 2;`");

class D {
  accessor x = 1;
}

print(D.prototype, 'x');

let d = new D();
print(d.x, 1, "The value of `d.x` is `1` after construction");
d.x = 2;
print(d.x, 2, "The value of `d.x` is `2`, after executing `d.x = 2;`");

class E {
  accessor #x = 1;

  getX() {
    return this.#x;
  }

  setX(v) {
    this.#x = v;
  }
}

let e = new E();
print(e.getX(), 1, "The value of `e.x` is `1` after construction");
e.setX(2);
print(e.getX(), 2, "The value of `e.x` is `2`, after executing `e.setX(2);`");

class F {
  static accessor x = 1;
}

print(F.x, 1, "The value of `F.x` is `1` after construction");
F.x = 2;
print(F.x, 2, "The value of `F.x` is `2`, after executing `F.x = 2;`");

print(F, 'x');

class G {
  static accessor #x = 1;

  getX() {
    return G.#x;
  }

  setX(v) {
    G.#x = v;
  }
}
g = new G();
print(g.getX(), 1, "The value of `g.getX()` is `1` after construction");
g.setX(2);
print(g.getX(), 2, "The value of `g.getX()` is `2`, after executing `g.setX(2)`");
