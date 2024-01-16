








function f1(x, x) {
    WScript.Echo(x);
    eval('arguments[0] = 0');
    eval('arguments[1] = 1');
    WScript.Echo(x);
}

for (var i = 0; i < 1; i++) {
    f1('arg 0', 'arg 1');
}


function f2(x, x) {
    WScript.Echo(x);
    function g() {
        eval('x = "arg 1"');
    }
    g();
    WScript.Echo(x);
}

for (var i = 0; i < 1; i++) {
    f2('arg 0');
}


function f3(i) {
    function inner() {
        WScript.Echo('inner');
    }
    if (i % 2 != 0) {
        return eval('inner()');
    }
    f3(i + 1);
}

for (i = 0; i < 2; i++)
    f3(i);

try
{
    new Function("let ifviki, eval = (z =  /x/g );L:switch(z) {  case eval(\"z\"): return 503599627370497;break;  }")();
}
catch(e)
{
    WScript.Echo(e.message);
}
