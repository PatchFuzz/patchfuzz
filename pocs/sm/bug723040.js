function f(x) {
    for (var i=0; i<50; i++) {
        print(x == null, false);
        print(x == undefined, false);
        print(x != null, true);
        print(x != undefined, true);
        print(x === null, false);
        print(x === undefined, false);
        print(x !== null, true);
        print(x !== undefined, true);
        print(x < null, false);
        print(x >= null, true);
    }
}
f(10);
f(0);
