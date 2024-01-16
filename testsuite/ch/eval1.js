





var x = eval("({" + '"' + "3d-cube" + '"' + ":[1]})");
WScript.Echo(x["3d-cube"][0]);
WScript.Echo(x);


eval("var i = " + '"' + "3d-cube" + '"' + ";");

var str1 = "var x;"
var str2 = "x = 9; g(); x = 8;"




eval("function f()"                           + 
     "{"                                      + 
     "    eval(str1);"                        +
     "    function g() { WScript.Echo(x); };" + 
     "    eval(str2);"                         +
     "    return g;"                          + 
     "}; "                                    +
     "WScript.Echo(x[i][0]);" );



var z = eval("f()");
eval("z()");



function foo(a, b, c) {
    eval("WScript.Echo(a);");
    eval("WScript.Echo(b);");
    eval("WScript.Echo(c);");
}

foo("foo.a", "foo.b");

(function () {
    function foo(a) {
        WScript.Echo(foo);
        eval("bar(false)");
        function bar(x) {
            if (x)
                foo(x);
        }
    };
    foo(true);
})();




var O = {xxx:'O.xxx'};
with (O)
{
    eval('function xxx(){}');
}
WScript.Echo(O.xxx);
WScript.Echo(xxx);

(function () { eval("function foobaz() {}") })();
try {
        foobaz();
        WScript.Echo("fail");
} catch(e) {
        WScript.Echo("pass");
}


function F(obj)
{
  this.name = "F";
  WScript.Echo("inside eval: this.name = " + obj.eval('this.name'));
}
this.name = "global object";
var f = new F(this);

var test11glob=42;

function test11() {
        var result;
        function test()
        {
                return this.test11glob
        }
        WScript.Echo(test());
        WScript.Echo(eval("test()"));
}

test11();


var G = this;
G.NSEval = G["eval"];
function alias() {
    var x = 'hello';
    
    
    
    G.NSEval('WScript.Echo(x)');
}
alias();


eval("with ({}) (function fibonacci() {})();"); 


var flg = 0;
function TestDirect() {
  var func = "if(flg == 0) { flg = 1; eval(func); (function(a){(function(){if (a !== undefined) throw 0;})()})(); WScript.Echo('pass direct')}";
  eval(func);
}
TestDirect();

var func = "if(flg == 1) { flg = 2; this.eval(func); (function(a){(function(){if (a !== undefined) throw 0;})()})(); WScript.Echo('pass indirect');}";
function TestIndirect() {
  this.eval(func);
}
TestIndirect();


var q = eval;
var eval = function(s) {
    
    WScript.Echo("Custom eval:");
    for (var index = 0; index < arguments.length; index++)
    {
        WScript.Echo("arg " + index + " = \'" + arguments[index] + "\'");
    }
    q(s);
}
eval("x[i][0] = 2;");
WScript.Echo(x[i][0]);


eval = (function (x, y) { WScript.Echo(y + ''); });
eval('hello');


function test5810363() {
  (function () {
    if (false) {
      (function () {
        eval('');
      }());
      function func13() {
      }
      while (func13 = func13) {
      }
    }
  }());
}
test5810363();
test5810363();
test5810363();
