


aa = eval
function bb() {
    this.eval = aa
}
var f = (function () {
    (Object.seal)(this)
    l
})
try {
    f()
} catch (r) {}
bb()
try {
    f()
} catch (r) {
    bb()
}
