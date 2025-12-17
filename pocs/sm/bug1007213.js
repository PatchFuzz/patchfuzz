function getval(o) {
    return obj.val
}
function f(x, o) {
    var lhs = -(~x >>> 0)
    var rhs = getval(o)
    return (lhs - rhs >> 0)
}
function getObj(v) {
    return {
        val: v
    }
}

var obj = getObj(1)
print(f(0, obj), 0)
print(f(0, obj), 0)
obj = getObj('can has bug?')
obj = getObj(.5)
print(f(0, obj), 1)
