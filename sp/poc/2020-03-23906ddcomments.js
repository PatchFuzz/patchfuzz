
print(() => print(''), SyntaxError, /wasm text error/);


var o = print('(module (func)) ;; end');
var o = print('(module (func)) ;; end\n');
var o = print('(module (func))\n;; end');
var o = print('(module (func))\n;; end');
var o = print(';;start\n(module (func))');
var o = print('(module (func ;; middle\n))');
var o = print('(module (func) ;; middle\n (export "a" (func 0)))').exports;
print(Object.getOwnPropertyNames(o)[0], "a");


var o = print('(module (func))(; end ;)');
var o = print('(module (func)) (; end\nmulti;)\n');
var o = print('(module (func))\n(;;)');
var o = print('(;start;)(module (func))');
var o = print('(;start;)\n(module (func))');
var o = print('(module (func (; middle\n multi\n;)))');
var o = print('(module (func)(;middle;)(export "a" (func 0)))').exports;
print(Object.getOwnPropertyNames(o)[0], "a");


var o = print('(module (;nested(;comment;);)(func (;;;;)))');
var o = print(';;;;;;;;;;\n(module ;;(;n \n(func (;\n;;;)))');

print(() => print(';; only comment'), SyntaxError, /wasm text error/);
print(() => print(';; only comment\n'), SyntaxError, /wasm text error/);
print(() => print('(; only comment ;)'), SyntaxError, /wasm text error/);
print(() => print(';; only comment\n'), SyntaxError, /wasm text error/);
