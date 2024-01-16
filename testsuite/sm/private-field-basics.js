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
  assertEq(a.x(), 10);
  a.ix();
  assertEq(a.x(), 11);
  assertEq(A.readx(a), 11);
  assertEq(a.compoundInc(), 12);
  assertEq(A.orEqual(a, 13), 12);
  a.setX(null);
  assertEq(A.orEqual(a, 12), 12);
  assertEq(a.compoundDec(), 11);
  assertEq(a.invoke(), 'hi');
  assertEq(a.gz(), 'static');
  assertEq(A.sgz(), 'static');
  A.ssz(i);
  assertEq(A.sgz(), i);
  a.sz(i + 1);
  assertEq(A.sgz(), i + 1);
  A.ssz('static');  

  assertEq(A.optionalx(a), 11);
  assertEq(A.optionalx(null), undefined);
  try {
    A.optionalx({});  
    assertEq(0, 1);
  } catch (TypeError) {
  }
}

function assertThrows(fun, errorType) {
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
  assertThrows(() => A.readx(v), TypeError);  
  assertThrows(() => A.six(v), TypeError);    
  assertThrows(() => A.dix(v), TypeError);    
}

testTypeErrors(undefined);  
testTypeErrors({});         
testTypeErrors(1);          

assertThrows(
  () => eval('class B extends class { #x; } { g() { return super.#x; } }'),
  SyntaxError);  
assertThrows(
  () => eval('class C { #x = 10; static #x = 14; }'),
  SyntaxError);  
assertThrows(
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
assertEq(o.test(), 3);



var alreadyConstructedB = new B();
assertEq(B.gx(alreadyConstructedB), 12);

function initIC(o) {
  new B(o);
}
var array = [];

for (var i = 1; i < 1000; i++) {
  var newB = {};
  initIC(newB);
}


assertThrows(() => initIC(alreadyConstructedB), TypeError);

assertThrows(() => initIC(alreadyConstructedB), TypeError);








var elements = [];
for (var i = 0; i < 99; i++) {
  elements.push(new B);
}
elements.push({});
elements.push({});

function getterCheck(e) {
  assertEq(B.gx(e), 12);
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
  
  assertEq(checksPassed, elements.length - 2);
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
  
  assertEq(checksPassed, elements.length - 2);
}


for (var index in elements) {
  if (index < elements.length - 2) {
    assertEq(B.gx(elements[index]), 13);
  } else {
    assertThrows(() => {
      B.gx(elements[index]);
    }, TypeError);
  }
}


for (var i = 0; i < 100; i++) {
  var inputs = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }, new Proxy({}, {})];
  for (var o of inputs) {
    assertThrows(() => B.gx(o), TypeError);
    assertThrows(() => B.sx(o), TypeError);
    new B(o);
    assertEq(B.gx(o), 12);
    B.sx(o);
    assertEq(B.gx(o), 13);
  }
}
