
function f() {
    with(this) {};
}
(new new Proxy(f, {get: f}))();
