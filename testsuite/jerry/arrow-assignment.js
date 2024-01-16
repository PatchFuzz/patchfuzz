

var y = 0
var prot = Object.getPrototypeOf(/ /)

prot.setY = function (v) { y = v }

assert(y === 0)

var f = x => {}
/ /.setY(5)
assert(y === 5)

var s

assert(eval("s = x => { return 1 }\n(3)") === 3)
assert(typeof s === "function")


assert(eval("s = function () { return 1 }\n(3)") === 1)
assert(s === 1)

var f = 5 ? x => 1 : x => 2
assert(f() === 1)

var f = [x => 2][0]
assert(f() === 2)

var f = 123; f += x => y
assert(typeof f === "string")


assert(eval("x => {}, 5") === 5)
