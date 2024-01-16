


o0 = (3).__proto__
function f(o) {
    var prop
    [o][0][prop] = []
    try {
        ({
            x: function() {
                return o
            }
        }.x()())
    } catch (e) {}
}
f(o0)
