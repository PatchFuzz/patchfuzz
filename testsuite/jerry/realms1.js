













var realm = createRealm()
var ev = realm.eval

assert(realm.Math != Math)
assert(typeof realm.Math === "object")
assert(realm.Object != Object)
assert(typeof realm.Object === "function")
assert(realm.eval != eval)
assert(typeof realm.eval === "function")


realm.assert = assert



realm.var1 = 3.5
assert(realm.var2 === undefined)

var var1 = "X"
var var2 = "Y"

ev("assert(var1 === 3.5); \
    try { realm; assert(false) } catch (e) { assert(e instanceof ReferenceError) } \
    assert(this === globalThis); \
    var var2 = this")
assert(realm.var2 === realm)

assert(var1 === "X")
assert(var2 === "Y")



assert (realm.RangeError != RangeError)
assert (realm.RangeError.prototype != RangeError.prototype)

realm.RangeError.prototype.myProperty = "XY"
assert(RangeError.prototype.myProperty === undefined)

try {
  var NumberToString = realm.Number.prototype.toString;
  NumberToString.call(0, 0)
  assert(false)
} catch (e) {
  assert(e instanceof realm.RangeError)
  assert(!(e instanceof RangeError))
  assert(e.myProperty === "XY")
}

assert (realm.SyntaxError != SyntaxError)
assert (realm.SyntaxError.prototype != SyntaxError.prototype)

realm.SyntaxError.prototype.myProperty = "AB"
assert(SyntaxError.prototype.myProperty === undefined)

try {
  ev("5 +")
  assert(false)
} catch (e) {
  assert(e instanceof realm.SyntaxError)
  assert(!(e instanceof SyntaxError))
  assert(e.myProperty === "AB")
}



realm.Boolean.prototype.valueOf.a = Function.prototype.apply
Boolean.prototype.valueOf.a = realm.Function.prototype.apply

try {
  realm.Boolean.prototype.valueOf.a()
} catch (e) {
  assert(e instanceof realm.TypeError)
  assert(!(e instanceof TypeError))
}

try {
  Boolean.prototype.valueOf.a()
} catch (e) {
  assert(e instanceof TypeError)
  assert(!(e instanceof realm.TypeError))
}
