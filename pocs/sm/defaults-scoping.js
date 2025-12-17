;

var x = 'global';
function f(a=x) {  
    var x = 'local';
    return a;
}
print(f(), 'global');

var i = 42;
function g(f=function () { return ++i; }) {  
    var i = 0;
    return f;
}
var gf = g();
print(gf(), 43);
print(gf(), 44);
gf = g();
print(gf(), 45);

function h(f=function (s) { return eval(s); }) {  
    var x = 'hlocal';
    return f;
}
var hf = h();
print(hf('x'), 'global');
print(hf('f'), hf);
print(hf('var x = 3; x'), 3);

function j(expr, v=eval(expr)) {
  return v;
}
print(j("expr"), "expr");
print(() => j("v"), ReferenceError);
print(j("Array"), Array);
print(j("arguments").length, 1);
