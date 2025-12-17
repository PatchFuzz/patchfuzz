Function.prototype.callX = Function.prototype.call;
var x;
function f() {
    x = f.caller;
    return x;
}

function g() {
    return f.callX(null);
}

function h1() {
    
    return ([0].map(f))[0];
}

function h2() {
    
    x = null;
    [0].forEach(f);
    return x;
}

function k() {
    x = null;
    [0, 1].sort(f);
    return x;
}

function l() {
    return f();
}

print(g(), g);
print(h1(), h1);
print(h2(), h2);
print(k(), k);
print(l(), l);

var baz;
var foo = {callX: function() { return "m"; }};
function bar() {
    return baz.caller;
}
function m() {
    return baz.callX(null);
}

baz = foo;
print(m(), "m");
baz = bar;
print(m(), m);
print(m(), m);
