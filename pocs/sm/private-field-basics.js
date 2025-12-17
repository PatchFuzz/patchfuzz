class A {
  #x = 10

  x() {
    return this.#x;
  }
  ix() {
    this.#x++;
  }
  static readx(o) {
    return o.#x;
  }
  static optionalx(o) {
    return o?.#x;
  }

  static orEqual(o, v) {
    o.#x ||= v;
    return o.#x;
  }

  setX(v) {
    this.#x = v;
  }

  compoundInc() {
    this.#x += 1;
    return this.#x;
  }

  compoundDec() {
    this.#x -= 1;
    return this.#x;
  }

  #y = () => 'hi';
  invoke() {
    return this.#y();
  }

  static #z = 'static';
  gz() {
    return A.#z;
  }

  sz(o) {
    A.#z = o;
  }

  static sgz() {
    return this.#z;
  }

  static ssz(o) {
    this.#z = o;
  }

  static six(o) {
    o.#x++;
  }

  static dix(o) {
    o.#x--;
  }
};

for (var i = 0; i < 1000; i++) {
  var a = new A();
  print(a.x(), 10);
  a.ix();
  print(a.x(), 11);
  print(A.readx(a), 11);
  print(a.compoundInc(), 12);
  print(A.orEqual(a, 13), 12);
  a.setX(null);
  print(A.orEqual(a, 12), 12);
  print(a.compoundDec(), 11);
  print(a.invoke(), 'hi');
  print(a.gz(), 'static');
  print(A.sgz(), 'static');
  A.ssz(i);
  print(A.sgz(), i);
  a.sz(i + 1);
  print(A.sgz(), i + 1);
  A.ssz('static');  

  print(A.optionalx(a), 11);
  print(A.optionalx(null), undefined);
  try {
    A.optionalx({});  
    print(0, 1);
  } catch (TypeError) {
  }
}

function print(fun, errorType) {
  try {
    fun();
    throw 'Expected error, but none was thrown';
  } catch (e) {
    if (!(e instanceof errorType)) {
      throw 'Wrong error type thrown';
    }
  }
}

function testTypeErrors(v) {
  print(() => A.readx(v), TypeError);  
  print(() => A.six(v), TypeError);    
  print(() => A.dix(v), TypeError);    
}

testTypeErrors(undefined);  
testTypeErrors({});         
testTypeErrors(1);          

print(
  () => eval('class B extends class { #x; } { g() { return super.#x; } }'),
  SyntaxError);  
print(
  () => eval('class C { #x = 10; static #x = 14; }'),
  SyntaxError);  
print(
  () => eval('delete this.#x'),
  SyntaxError);  

class B extends class {
  constructor(o) {
    return o;
  }
}
{
  #x = 12;
  static gx(o) {
    return o.#x;
  }
  static sx(o) {
    o.#x++;
  }
}

var bn = new B(1);
var bu = new B(undefined);


class Outer {
  #outer = 3;
  test() {
    let outerThis = this;
    class Inner {
      #inner = 2;
      test() {
        return outerThis.#outer;
      }
    }
    return new Inner().test();
  }
}

var o = new Outer;
print(o.test(), 3);



var alreadyConstructedB = new B();
print(B.gx(alreadyConstructedB), 12);

function initIC(o) {
  new B(o);
}
var array = [];

for (var i = 1; i < 1000; i++) {
  var newB = {};
  initIC(newB);
}


print(() => initIC(alreadyConstructedB), TypeError);

print(() => initIC(alreadyConstructedB), TypeError);








var elements = [];
for (var i = 0; i < 99; i++) {
  elements.push(new B);
}
elements.push({});
elements.push({});

function getterCheck(e) {
  print(B.gx(e), 12);
}

function setterCheck(e) {
  B.sx(e);
}

var checksPassed = 0;
try {
  for (var e of elements) {
    getterCheck(e);
    checksPassed++;
  }
  throw `Shouldn't arrive here`;
} catch (e) {
  if (!(e instanceof TypeError)) {
    throw e;
  }
  
  print(checksPassed, elements.length - 2);
}

checksPassed = 0;
try {
  for (var e of elements) {
    setterCheck(e);
    checksPassed++;
  }
  throw `Shouldn't arrive here`;
} catch (e) {
  if (!(e instanceof TypeError)) {
    throw e;
  }
  
  print(checksPassed, elements.length - 2);
}


for (var index in elements) {
  if (index < elements.length - 2) {
    print(B.gx(elements[index]), 13);
  } else {
    print(() => {
      B.gx(elements[index]);
    }, TypeError);
  }
}


for (var i = 0; i < 100; i++) {
  var inputs = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }, new Proxy({}, {})];
  for (var o of inputs) {
    print(() => B.gx(o), TypeError);
    print(() => B.sx(o), TypeError);
    new B(o);
    print(B.gx(o), 12);
    B.sx(o);
    print(B.gx(o), 13);
  }
}
