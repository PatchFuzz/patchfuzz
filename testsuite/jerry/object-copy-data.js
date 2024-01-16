













function checkOwnProperties(obj, propList)
{
  names = Object.getOwnPropertyNames(obj)
  assert(names.length === propList.length)

  for (var i = 0; i < propList.length; ++i)
  {
    assert(names[i] === propList[i])

    var descriptor = Object.getOwnPropertyDescriptor(obj, names[i])
    assert(descriptor.writable == true && descriptor.get === undefined && descriptor.set === undefined);
  }
}

var o = {..."a" + "bc"}

assert(o[0] === "a")
assert(o[1] === "b")
assert(o[2] === "c")
checkOwnProperties(o, ["0", "1", "2"])

s = { a:3.5, b() {}, get c() { return "Prop" } }
o = {...null, ...undefined, ...s}

assert(o.a === 3.5)
assert(o.b === s.b)
assert(o.c === "Prop")
checkOwnProperties(o, ["a", "b", "c"])

s = { a:"X", b:-1.25, c:"Str" }
o = { get a() {}, set b(v) {}, ...s, c() { return 1 }}

assert(o.a === "X")
assert(o.b === -1.25)
assert(o.c() === 1)
checkOwnProperties(o, ["a", "b", "c"])

s = { p1:[1,2], "(a)":"Msg" }
Object.defineProperty(s, 'nonEnumerable', { value: 8.75, writable: true, enumerable:false });
assert(s.nonEnumerable === 8.75)

o = { ...s, "p!":5, ...s, ...s }
assert(o.p1 === s.p1)
assert(o["(a)"] === "Msg")
assert(o["p!"] === 5)
checkOwnProperties(o, ["p1", "(a)", "p!"])

var sym = Symbol('Any')
s = [ { [sym]:5, a:6 } ]
o = { ...((s))[0] }

assert(o[sym] === 5)
assert(o.a === 6)
checkOwnProperties(o, ["a"])
