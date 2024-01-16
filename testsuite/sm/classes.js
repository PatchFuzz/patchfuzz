load(libdir + 'bytecode-cache.js');



gczeal(0);

var test = "new class extends class { } { constructor() { super(); } }()";
evalWithCache(test, { assertEqBytecode : true });

var test = "new class { method() { super.toString(); } }().method()";
evalWithCache(test, { assertEqBytecode : true });


var test = `
    function f(delazify) {
        function inner1() {
            class Y {
                constructor() {}
            }
        }

        function inner2() {
            class Y {
                constructor() {}
                field1 = "";
            }
        }

        if (delazify) {
            inner1();
            inner2();
        }
    }
    f(generation > 0);
`;
evalWithCache(test, {});
