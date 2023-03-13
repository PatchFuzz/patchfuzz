













print(eval () === undefined);
print(eval (undefined) === undefined);
print(eval (null) === null);
print(eval (true) === true);
print(eval (false) === false);
print(eval (1) === 1);
print(eval (eval) === eval);


function f1()
{
 var v1 = 'local value';

 print(v1 === 'local value');
 print(typeof (this.v1) === 'undefined');

 r = this.eval ('var v1 = "global value";');

 print(v1 === 'local value');
 print(this.v1 === 'global value');
 print(r === undefined);
};

f1 ();


function f2 (global)
{
 'use strict';
 var v2 = 'local value';

 print(v2 === 'local value');
 print(typeof (global.v2) === 'undefined');

 r = eval ('var v2 = "global value";');

 print(v2 === 'local value');
 print(typeof (global.v2) === 'undefined');
 print(r === undefined);

 try
 {
   eval ('arguments = 1;');
   print(false);
 }
 catch (e)
 {
   print(e instanceof SyntaxError);
 }
}

f2 (this);

var y;

for (var i = 0; i < 100; i++)
{
  var r = eval ('var x =' + ' 1;');
  print(typeof (x) === 'number');
  print(r === undefined);

  delete x;
  print(typeof (x) === 'undefined');

  r = eval ('"use ' + 's' + 't' + 'r' + 'i' + 'c' + 't"; va' + 'r x = 1;');
  print(typeof (x) === 'undefined');
  print(r === "use strict");

  y = 'str';
  print(typeof (y) === 'string');

  delete y;
  print(typeof (y) === 'string');

  r = eval ('var y = "another ' + 'string";');
  print(y === 'another string');
  print(r == undefined);

  delete y;
  print(typeof (y) === 'string');

  r = eval ('if (true) 3; else 5;');
  print(r === 3);
}


try
{
  eval ('var var;');
  print(false);
}
catch (e)
{
  print(e instanceof SyntaxError);
}

try
{
  eval ("v_0 = {a: Math, /[]/};");
  print(false);
}
catch(e)
{
  print(e instanceof SyntaxError);
}


code = 'eval("(function (){})")';
code = "eval ('" + code + "')";
eval (code);


var p1 = 0;

function f3() {
  var p1 = 5;
  (eval)("print(p1 === 5)");
}
f3();

function f4() {
  var p1 = 6;
  ((eval))("print(p1 === 6)");
}
f4();

function f5() {
  var p1 = 7;
  (((((eval)))("print(p1 === 7)")));
}
f5();

function f6() {
  var p1 = 8;
  var e = eval;

  e("print(p1 === 0)");
  (((((e)))("print(p1 === 0)")));
}
f6();

y = 1;
function f7() {
  function x() { return y; }
  eval("print(x()() === 5); function y() { return 5 } print(x()() === 5)");
}
f7()

eval(" ");
eval("(function () {})")

try {
  
  eval("()=>0")
} catch (e) {
  print(e instanceof SyntaxError)
}
