function* gen() {
}
let g = gen();
function f() {
    g.next();
    f();
    f();
    f();
    f();
    f();
    f();
    f();
    f();
    f();
    f();
};
try {
    f();
} catch { }
