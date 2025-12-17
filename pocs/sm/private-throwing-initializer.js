class Base {
  constructor(o) {
    return o;
  }
}

let constructorThrow = false;

function maybeThrow() {
  if (constructorThrow) {
    throw 'fail'
  }
  return 'sometimes'
}

class A extends Base {
  constructor(o) {
    super(o);
    constructorThrow = !constructorThrow;
  }

  #x = 'always';
  #y = maybeThrow();

  static gx(o) {
    return o.#x;
  }

  static gy(o) {
    return o.#y;
  }
};

var obj1 = {};
var obj2 = {};

new A(obj1);

var threw = true;
try {
  new A(obj2);
  threw = false;
} catch (e) {
  print(e, 'fail');
}
print(threw, true);

A.gx(obj1)
A.gx(obj2);  
A.gy(obj1);  

try {
  A.gy(obj2);  
  threw = false;
} catch (e) {
  print(e instanceof TypeError, true);
}

print(threw, true);
