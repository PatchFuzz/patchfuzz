(function() { var x = 2; eval("print(x, 2)"); })();
(function() { var x = 2; (function() { print(x, 2) })() })();
(function() { var x = 2; (function() { eval("print(x, 2)") })() })();
(function() { var x = 2; (function() { (function() { print(x, 2) })()})() })();
(function() { var x = 2; (function() { (function() { eval("print(x, 2)") })()})() })();

(function() { var x = 2; with({}) { print(x, 2) } })();
(function() { var x = 2; with({}) { (function() { print(x, 2) })() } })();
(function() { var x = 3; with({x:2}) { print(x, 2) } })();
(function() { var x = 3; with({x:2}) { (function() { print(x, 2) })() } })();
(function() { var x = 2; (function() { with({}) { print(x, 2) } })() })();
(function() { var x = 2; (function() { with({}) { (function() { print(x, 2) })() } })() })();
(function() { var x = 3; (function() { with({x:2}) { print(x, 2) } })() })();
(function() { var x = 3; (function() { with({x:2}) { (function() { print(x, 2) })() } })() })();

(function() { if (Math) function x() {}; print(typeof x, "function") })();
(function() { if (Math) function x() {}; eval('print(typeof x, "function")') })();
(function() { if (Math) function x() {}; (function() { print(typeof x, "function") })() })();
(function() { if (Math) function x() {}; (function() { eval('print(typeof x, "function")') })() })();

(function() { eval("var x = 2"); print(x, 2) })();
(function() { eval("var x = 2"); (function() { print(x, 2) })() })();
(function() { eval("var x = 2"); (function() { (function() { print(x, 2) })() })() })();

(function() { var x = 2; (function() { eval('var y = 3'); print(x, 2) })() })();
(function() { var x = 2; (function() { eval('var y = 3'); (function() { print(x, 2) })() })() })();

(function() { var x = 3; (function() { eval('var x = 2'); print(x, 2) })() })();
(function() { var x = 3; (function() { eval('var x = 2'); (function() { print(x, 2) })() })() })();

(function() { var x = 2; eval("eval('print(x, 2)')") })();
(function() { var x = 2; (function() { eval("eval('print(x, 2)')") })() })();
(function() { var x = 2; eval("(function() { eval('print(x, 2)') })()") })();
(function() { var x = 2; (function() { eval("(function() { eval('print(x, 2)') })()") })() })();
(function() { var x = 2; (function() { eval("(function() { eval('(function() { print(x, 2) })()') })()") })() })();

(function() { var [x] = [2]; eval('print(x, 2)') })();
(function() { var [x] = [2]; (function() { print(x, 2) })() })();
(function() { var [x] = [2]; (function() { eval('print(x, 2)') })() })();
(function() { for (var [x] = [2];;) { return (function() { return print(x, 2); })() } })();
(function() { for (var [x] = [2];;) { return (function() { return eval('print(x, 2)'); })() } })();

(function() { var {y:x} = {y:2}; eval('print(x, 2)') })();
(function() { var {y:x} = {y:2}; (function() { print(x, 2) })() })();
(function() { var {y:x} = {y:2}; (function() { eval('print(x, 2)') })() })();
(function() { for (var {y:x} = {y:2};;) { return (function() { return print(x, 2); })() } })();
(function() { for (var {y:x} = {y:2};;) { return (function() { return eval('print(x, 2)'); })() } })();

(function([x]) { eval('print(x, 2)') })([2]);
(function([x]) { (function() { print(x, 2) })() })([2]);
(function([x]) { (function() { eval('print(x, 2)') })() })([2]);

(function f() { print(f.length, 0) })();
(function f() { eval('print(f.length, 0)') })();
(function f() { (function f(x) { eval('print(f.length, 1)') })() })();
(function f() { eval("(function f(x) { eval('print(f.length, 1)') })()") })();

(function f() { arguments = 3; function arguments() {}; print(arguments, 3) })();
(function f() { function arguments() {}; arguments = 3; print(arguments, 3) })();
(function f() { var arguments = 3; function arguments() {}; print(arguments, 3) })();
(function f() { function arguments() {}; var arguments = 3; print(arguments, 3) })();

function f1() { print(typeof f1, "function") }; f1();
with({}) { (function() { print(typeof f1, "function") })() }
if (Math)
    function f2(x) {}
print(f2.length, 1);
