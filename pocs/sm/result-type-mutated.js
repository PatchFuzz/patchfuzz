function foo(x) {
    return x.f;
}

function bar() {
    with({}){}

    var a = {};
    var b = { f: a };
    foo(b);
    a.__proto__ = null;
    foo(b);
}

bar();
