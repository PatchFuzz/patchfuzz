function check(actual, expected) {
    print(actual.length, expected.length);
    for (var i = 0; i < expected.length; i++)
       print(actual[i], expected[i]);
}

function func(a) { return a; }

function csoLoop() {
    var cso = [];
    for (var index = 0; index < 2000; index++) {
        cso[index] = func`hey${4}there`;
        if (index > 0)
            print(cso[index - 1], cso[index]);
    }
}


csoLoop();


if (helperThreadCount() !== 0) {
    offThreadCompileToStencil("(x=>x)`abc`");
    var stencil = finishOffThreadStencil();
    a = evalStencil(stencil);
    check(a, ["abc"]);
    check(a.raw, ["abc"]);
    print(a === a.raw, false);
    print(Object.isFrozen(a), true);
    print(Object.isFrozen(a.raw), true);
}
