













var count = 0
class C1 {
  error = assert(++count === 1)
  error = function() { throw 40.5 }()
}

try {
  new C1
  assert(false)
} catch(e) {
  assert(e === 40.5)
  assert(count === 1)
}

count = 0
class C2 {
  constructor(a = assert(++count === 1)) {}
  error = function() { throw "Err" }()
  error = assert(false)
}

try {
  new C2
  assert(false)
} catch(e) {
  assert(e === "Err")
  assert(count === 1)
}

count = 0
var o = {}

class C3 extends class {
  error = function() { throw o }()
} {
  constructor() {
    assert(++count === 1)
    super()
    assert(false)
  }
}

try {
  new C3
  assert(false)
} catch (e) {
  assert(e === o)
  assert(count === 1)
}

count = 0
class C4 {
  constructor() {
    assert(++count === 2)
  }
  a = assert(++count === 1)
}

class C5 extends C4 {
  ok = assert(++count === 3)
  error = function() { assert(++count === 4); throw "Except" }()
  never = assert(false)
}

try {
  new C5
  assert(false)
} catch (e) {
  assert(e === "Except")
  assert(count === 4)
}

count = 0
o = []
class C6 {
  a = assert(++count === 2)
}

class C7 extends C6 {
  constructor() {
    assert(++count === 1)
    eval('super()')
    assert(false)
  }
  ok = assert(++count === 3)
  error = function() { assert(++count === 4); throw o }()
  never = assert(false)
}

try {
  new C7
  assert(false)
} catch (e) {
  assert(e === o)
  assert(count === 4)
}

var res
class C8 {
  
  a = (res = this, Object.defineProperty(this, "b", { get() {} }));
  b = 6
}

try {
  new C8
  assert(false)
} catch(e) {
  assert(e instanceof TypeError)
  assert(Reflect.ownKeys(res).toString() === "b,a")
}

class C9 {
  ["p" + 1]
  ["p" + 2] = (res = this, Object.freeze(this));
  p3
}

try {
  new C9
  assert(false)
} catch(e) {
  assert(e instanceof TypeError)
  assert(Reflect.ownKeys(res).toString() === "p1")
}
