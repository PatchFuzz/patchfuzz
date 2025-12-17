eval("var inEvalFunc1 = function () { return 'inEvalFunc1'; }");

function foo() {
    var a = 10;
    function f1() {
        function f11() {
            return a;       
        }
        f11();
    }
    f1();

    function g() {
        return 10;
    }
    g();                  

    try {
        abc.def = 10;
    }
    catch (t) {
        var s = function (a, b) {
            eval('');
            return a + b;
        }
        t;                      
    }

    print("Pass");
}

CollectGarbage();

print(foo);
