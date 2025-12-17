function foo1() {
    var ary = Array();
    var foo1Var = 1;
    function foo2() {
        var foo2Var = 0;
        var err = Error();
        try {
            throw err;
        } catch (ex) { }
        while (true) {
            function foo4() {
                foo5();
            }
            foo1Var = ary;
            function foo5() {
                ary[foo2Var] = foo1Var;
            }
            foo5(ary);
            break;
        }
    }
    foo2();
    print(typeof ary[0]);
};
foo1();
