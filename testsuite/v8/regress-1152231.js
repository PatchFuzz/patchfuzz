




function ID(x) {
  return x;
}

function f2(v) {
  var p = v.prototype;
  Object.defineProperty(p, undefined, { });
  assertArrayEquals(['constructor', 'a', 'b', 'c', 'd', 'undefined'],
                    Object.getOwnPropertyNames(p));
}

function f22() {
  class class1 {
    a() {
    }
    get [ID('b')]() {
    }
    c() {
    }
    d() {
    }
  }
  f2(class1);
};

f22();
