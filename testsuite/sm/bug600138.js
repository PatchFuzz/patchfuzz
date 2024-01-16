


function z() {
    this.a = function () {}
    this.a = this
    Object.defineProperty(this, "a", ({}))
}
for (e in [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) {
    new z()
}
