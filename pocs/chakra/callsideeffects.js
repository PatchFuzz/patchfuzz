function write(v) { print("" + v); }

var x = ['x'];
x.call1 = function() { write('In x.call1: this = ' + this) };

var y = ['y'];
y.call1 = function() { write('In y.call1: this = ' + this) };

function call1()
{
    write('In call1: this = ' + this);
}

function call2()
{
    write('In call2: this = ' + this);
}

var savecall1 = call1;
call1(call1 = call2);
call1 = savecall1;

savecall1 = x.call1;
x.call1(x.call1 = call1);
x.call1 = savecall1;

var savex = x;
x.call1(x.call1 = y.call1);
x = savex;
x.call1 = savecall1;

var s = 'call1';
x[x = s]();
x = savex;

x[s](s = 'call2');
s = 'call1';

x[s](x[s] = y.call1);
x[s] = x.call1;

(function() {
    

    var x = ['x'];
    x.call1 = function() { write('In x.call1: this = ' + this) };

    var y = ['y'];
    y.call1 = function() { write('In y.call1: this = ' + this) };

    function call1()
    {
        write('In call1: this = ' + this);
    }

    function call2()
    {
        write('In call2: this = ' + this);
    }

    var savecall1 = call1;
    call1(call1 = call2);
    call1 = savecall1;

    savecall1 = x.call1;
    x.call1(x.call1 = call1);
    x.call1 = savecall1;

    var savex = x;
    x.call1(x.call1 = y.call1);
    x = savex;
    x.call1 = savecall1;

    var s = 'call1';
    x[x = s]();
    x = savex;

    x[s](s = 'call2');
    s = 'call1';

    x[s](x[s] = y.call1);
    x[s] = x.call1;
})();

(function() {
var evalExpr = '' +
    'var x = ["x"];' +
    'x.call1 = function() { write("In x.call1: this = " + this) };' +

    'var y = ["y"];' +
    'y.call1 = function() { write("In y.call1: this = " + this) };' +

    'function call1()' +
    '{' +
        'write("In call1: this = " + this);' +
    '}' +

    'function call2()' +
    '{' +
        'write("In call2: this = " + this);' +
    '}' +

    'var savecall1 = call1;' +
    'call1(call1 = call2);' +
    'call1 = savecall1;' +

    'savecall1 = x.call1;' +
    'x.call1(x.call1 = call1);' +
    'x.call1 = savecall1;' +

    'var savex = x;' +
    'x.call1(x.call1 = y.call1);' +
    'x = savex;' +
    'x.call1 = savecall1;' +

    'var s = "call1";' +
    'x[x = s]();' +
    'x = savex;' +

    'x[s](s = "call2");' +
    's = "call1";' +

    'x[s](x[s] = y.call1);' +
    'x[s] = x.call1;';

    eval(evalExpr);
})();



function test5921858() {
    function eval([]){}
    function shapeyConstructor(fujzty){
        Object.defineProperty(this, "a", 
                              ({value: ((eval("true", window)) ^= z), writable: true, configurable: false}));
    }
}
