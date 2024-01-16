


function b(z) {
  switch (z) {
  default:
    primarySandbox = newGlobal()
  }
  return function(f, code) {
    try {
      evalcx(code, primarySandbox)
    } catch (e) {}
  }
}
function a(code) {
  gc();
  f = Function(code)
  c(f, code)
}
c = b()
a("\
  f2 = (function() {\
    a0 + o2.m;\
    a2.shift()\
  });\
  a2 = new Array;\
  Object.defineProperty(a2, 0, {\
    get: f2\
  });\
  o2 = {};\
  a0 = [];\
  a2.shift();\
  var x;\
")
a("a0 = x")
a("a2.shift()")
