function f() {
    ((function g(x) {
        g(x.slice)
    })([]))
}
new f
