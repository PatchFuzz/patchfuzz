function print(x) { print(x+""); }

var inFunctionTests =
[

    function () {
        var x = 1;
        eval("let x = 2;");
        print(x);
    },
    function () {
        var x = 1;
        eval("const x = 2;");
        print(x);
    },
    function () {
        eval("let x = 2;");
        var x = 1;
        print(x);
    },
    function () {
        eval("const x = 2;");
        var x = 1;
        print(x);
    },

    function () {
        let x = 1;
        eval("var x = 2;");
        print(x);
    },
    function () {
        const x = 1;
        eval("var x = 2;");
        print(x);
    },
    function () {
        eval("var x = 2;");
        let x = 1;
        print(x);
    },
    function () {
        eval("var x = 2;");
        const x = 1;
        print(x);
    },
];

for (let i = 0; i < inFunctionTests.length; i++)
{
    try {
        inFunctionTests[i]();
    } catch (e) {
        print(e);
    }
}





var a = 1;
eval("let a = 2;");
print(a);

var b = 1;
eval("const b = 2;");
print(b);

eval("let c = 2;");
var c = 1;
print(c);

eval("const d = 2;");
var d = 1;
print(d);


let e = 1;
try { eval("var e = 2;"); print(e); } catch (e) { print(e); }

const f = 1;
try { eval("var f = 2;"); print(f); } catch (e) { print(e); }

var hadException = false;
try { eval("var g = 2;"); } catch (e) { print(e); hadException = true; }
let g = 1;
if (!hadException) print(g);

hadException = false;
try { eval("var h = 2;"); } catch (e) { print(e); hadException = true; }
const h = 1;
if (!hadException) print(h);
