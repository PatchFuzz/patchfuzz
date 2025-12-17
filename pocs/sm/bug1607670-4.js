function F() {}
function G() {}

function f() {
    for (var i = 0; i < 10000; ++i) {
        var o = Reflect.construct(F, []);
        print(Object.getPrototypeOf(o), F.prototype);
    }

    for (var i = 0; i < 10000; ++i) {
        var o = Reflect.construct(F, [], G);
        print(Object.getPrototypeOf(o), G.prototype);
    }
}

for (var i = 0; i < 2; ++i) f();
