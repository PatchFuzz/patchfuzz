




Object.extend = function(destination, source) {
    for (var property in source)
    destination[property] = source[property]
}
Object.extend(Function.prototype, {
    curry: function() {
        var __method = this,
        args = $A(arguments)
        return function() {
            return __method(
            arguments)
        }
    },
    wrap: function(wrapper) {
        return function() { ([](
            $A(arguments)))
        }
    }
})
function $A(iterable) {
    var length = iterable.length
    while (length--);
}
var ga = {
    c: 3,
    d: 4
}
ga.
__defineGetter__("", /x/.test.wrap("").curry(true, ""))
for (var p in ga) {
    ga[p]
}
