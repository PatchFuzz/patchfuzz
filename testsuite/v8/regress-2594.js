































function f1() {
  var XXX = 0
  try { throw 1 } catch (XXX) {
    eval("var h = function() { return XXX }")
  }
  return h()
}
assertEquals(1, f1())

function f2() {
  var XXX = 0
  try { throw 1 } catch (XXX) {
    eval("function h(){ return XXX }")
  }
  return h()
}
assertEquals(1, f2())

function f3() {
  var XXX = 0
  try { throw 1 } catch (XXX) {
    try { throw 2 } catch (y) {
      eval("function h(){ return XXX }")
    }
  }
  return h()
}
assertEquals(1, f3())

function f4() {
  var XXX = 0
  try { throw 1 } catch (XXX) {
    with ({}) {
      eval("function h(){ return XXX }")
    }
  }
  return h()
}
assertEquals(1, f4())

function f5() {
  var XXX = 0
  try { throw 1 } catch (XXX) {
    eval('eval("function h(){ return XXX }")')
  }
  return h()
}
assertEquals(1, f5())

function f6() {
  var XXX = 0
  try { throw 1 } catch (XXX) {
    eval("var h = (function() { function g(){ return XXX } return g })()")
  }
  return h()
}
assertEquals(1, f6())

function f7() {
  var XXX = 0
  try { throw 1 } catch (XXX) {
    eval("function h() { var XXX=2; function g(){ return XXX } return g }")
  }
  return h()()
}
assertEquals(2, f7())  

var XXX = 0
try { throw 1 } catch (XXX) {
  eval("function h(){ return XXX }")
}
assertEquals(1, h())
