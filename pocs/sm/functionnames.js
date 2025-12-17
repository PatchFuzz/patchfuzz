function print(fn, name) {
    print(displayName(fn), name)
}


var a = function b() {};
function c() {};
print(a, 'b');
print(c, 'c');

var a = function(){},
    b = function(){};
print(a, 'a');
print(b, 'b');


var main = function() {
    function Foo(a) { print(a, 'main/foo<') }
    var foo = new Foo(function() {});
};
print(main, 'main')
main();


var Baz = Bar = function(){}
print(Baz, 'Bar');
print(Bar, 'Bar');


var Foo = function (){
    print(arguments.callee, 'Foo<')
    return function(){};
}();
print(Foo, 'Foo</<');


var x = {fox: { bax: function(){} } };
print(x.fox.bax, 'bax');
var foo = {foo: {foo: {}}};
foo.foo.foo = function(){};
print(foo.foo.foo, 'foo.foo.foo');
var z = {
    foz: function() {
             var baz = function() {
                 var y = {bay: function() {}};
                 print(y.bay, 'bay');
             };
             print(baz, 'baz');
             baz();
         }
};
print(z.foz, 'foz');
z.foz();

var outer = function() {
    x.fox.bax.nx = function(){};
    var w = {fow: { baw: function(){} } };
    print(x.fox.bax.nx, 'outer/x.fox.bax.nx')
    print(w.fow.baw, 'baw');
};
print(outer, 'outer');
outer();
function Fuz(){};
Fuz.prototype = {
  add: function() {}
}
print(Fuz.prototype.add, 'add');

var x = 1;
x = function(){};
print(x, 'x');

var a = {b: {}};
a.b.c = (function() {
    print(arguments.callee, 'a.b.c<')
}());

a.b = function() {
    function foo(f) { print(f, 'a.b/<'); };
    return foo(function(){});
}
a.b();

var bar = 'bar';
a.b[bar] = function(){};
print(a.b.bar, 'a.b[bar]');

a.b = function() {
    print(arguments.callee, 'a.b<');
    return { a: function() {} }
}();
print(a.b.a, 'a');

a = {
    b: function(a) {
        if (a)
            return function() {};
        else
            return function() {};
    }
};
print(a.b, 'b');
print(a.b(true), 'b/<')
print(a.b(false), 'b/<')

function f(g) {
    print(g, 'x<');
    return g();
}
var x = f(function () { return function() {}; });
print(x, 'x</<');

var a = {'b': function(){}};
print(a.b, 'b');

function g(f) {
  print(f, '');
}
label: g(function () {});

var z = [function() {}];
print(z[0], 'z<');


odeURIL:(function(){})

a = { 1: function () {} };
print(a[1], '1');

a = {
  "embedded spaces": function(){},
  "dots.look.like.property.references": function(){},
  "\"\'quotes\'\"": function(){},
  "!@#$%": function(){}
};
print(a["embedded spaces"], 'embedded spaces');
print(a["dots.look.like.property.references"], 'dots.look.like.property.references');
print(a["\"\'quotes\'\""], '"\'quotes\'"');
print(a["!@#$%"], '!@#$%');

a.b = {};
a.b.c = {};
a.b["c"]["d e"] = { f: { 1: { "g": { "h i": function() {} } } } };
print(a.b.c["d e"].f[1].g["h i"], 'h i');

this.m = function () {};
print(m, "this.m");

function N() {
  this.o = function () {}
}
let n = new N()
print(n.o, "N/this.o");
