















function f1() {
  var ev = createRealm().eval

  gc()

  try {
    ev("5 +")
  } catch (e) {
    assert(e instanceof ev("this").SyntaxError)
    assert(!(e instanceof SyntaxError))
  }
}
f1()



function f2() {
  var realm = createRealm()

  var str = new realm.String("A");
  
  Object.getPrototypeOf(str).myProperty = "XY"

  str = null
  
  gc()

  str = new realm.String("A")
  assert(Object.getPrototypeOf(str).myProperty === "XY")
  assert(realm.String.prototype.myProperty === "XY")
}
f2()
