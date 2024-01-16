


function f() {
    constructor = {}
}
Object.defineProperty(function() {
    return {}.__proto__
}(), "constructor", {
    set: function() {}
})
f()
Object.defineProperty({}.__proto__, "constructor", {
    value: 3
})
f()
