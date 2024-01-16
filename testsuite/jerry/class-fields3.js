













function check_property(obj, name, value)
{
  property = Object.getOwnPropertyDescriptor(obj, name)
  assert(typeof property === "object")
  assert(property.value === value)
}

var o = {}
var name = "Pro"
var res = 0
var counter = 0

function f1() {
  counter++
}

class C1 {
  static
    v\u0061r
  static Prop =
    res
    =
    "msg"
  static
    Prop
    =
    f1()
  static [name + "p"] = (f1(), o)
  static 22 = 3 * 4  ;static 23 = 5 + 6
  static 'a b'
}

check_property(C1, "var", undefined)
check_property(C1, "Prop", o)
check_property(C1, 22, 12)
check_property(C1, 23, 11)
check_property(C1, "a b", undefined)
assert(res === "msg")
assert(counter === 2)

counter = 0
class C2 {
  static a = (assert(++counter === 6), "x")
  static [(assert(++counter === 1), "b")]
  static [(assert(++counter === 2), "f")]() {}
  static [(assert(++counter === 3), "c")] = (assert(++counter === 7), this);
  [(assert(++counter === 4), "a")]
  static [(assert(++counter === 5), "d")];static e = (assert(++counter === 8), C2)
}

assert(counter === 8)
check_property(C2, "a", "x")
check_property(C2, "b", undefined)
check_property(C2, "c", C2)
check_property(C2, "d", undefined)
check_property(C2, "e", C2)

res = new C2
check_property(res, "a", undefined)

let C3 = class C4 {
  static f() {}
  static xx = C4
  static yy = this
}

assert(Reflect.ownKeys(C3).toString() === "length,name,prototype,f,xx,yy")
check_property(C3, "xx", C3)
check_property(C3, "yy", C3)
