;

eval(`"use strict";
function f1(f=(function () { return typeof this !== "object"; })) { return f; }
print(f1()(), true);
`);

function f2(f=(function () { "use strict"; return (function () { return typeof this !== "object"; }) })) { print(typeof this, "object"); return f; }
print(f2()()(), true);

eval(`"use strict";
function f3(f=(function () { return (function () { return typeof this !== "object"; }) })) { return f; }
print(f3()()(), true);
`);


function f4(f=(function () { with (Object) {} }), g=(function () { "use strict"; })) {}
function f5(g=(function () { "use strict"; }), f=(function () { with (Object) {} })) {}

print(function () {
    eval("'use strict'; function f(a=delete x) { }");
}, SyntaxError);
print(function () {
    Math.sin(4);
    eval("'use strict'; function f(a='\\251') { }");
}, SyntaxError);
print(function () {
    eval("'use strict'; function f(a='\\251', b=delete x) { }");
}, SyntaxError);
print(function () {
    eval("'use strict'; function f(a=delete x, b='\\251') { }");
}, SyntaxError);
print(function () {
    eval("'use strict'; function f(a=(function () { '\\251'; })) { }");
}, SyntaxError);
print(function () {
    eval("'use strict'; function f(a=(function () { with (Object) {} })) { }");
}, SyntaxError);
print(function () {
    eval("'use strict'; function f(a=(function (b, b) {})) { }");
}, SyntaxError);
