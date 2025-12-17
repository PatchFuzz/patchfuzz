assert (eval () === undefined);
assert (eval (undefined) === undefined);
assert (eval (null) === null);
assert (eval (true) === true);
assert (eval (false) === false);
assert (eval (1) === 1);
assert (eval (eval) === eval);


function f1()
{
 var v1 = 'local value';

 assert (v1 === 'local value');
 assert (typeof (this.v1) === 'undefined');

 r = this.eval ('var v1 = "global value";');

 assert (v1 === 'local value');
 assert (this.v1 === 'global value');
 assert (r === undefined);
};

f1 ();


function f2 (global)
{
 'use strict';
 var v2 = 'local value';

 assert (v2 === 'local value');
 assert (typeof (global.v2) === 'undefined');

 r = eval ('var v2 = "global value";');

 assert (v2 === 'local value');
 assert (typeof (global.v2) === 'undefined');
 assert (r === undefined);

 try
 {
   eval ('arguments = 1;');
   assert (false);
 }
 catch (e)
 {
   assert (e instanceof SyntaxError);
 }
}

f2 (this);

var y;

for (var i = 0; i < 100; i++)
{
  var r = eval ('var x =' + ' 1;');
  assert (typeof (x) === 'number');
  assert (r === undefined);

  delete x;
  assert (typeof (x) === 'undefined');

  r = eval ('"use ' + 's' + 't' + 'r' + 'i' + 'c' + 't"; va' + 'r x = 1;');
  assert (typeof (x) === 'undefined');
  assert (r === "use strict");

  y = 'str';
  assert (typeof (y) === 'string');

  delete y;
  assert (typeof (y) === 'string');

  r = eval ('var y = "another ' + 'string";');
  assert (y === 'another string');
  assert (r == undefined);

  delete y;
  assert (typeof (y) === 'string');

  r = eval ('if (true) 3; else 5;');
  assert (r === 3);
}


try
{
  eval ('var var;');
  assert (false);
}
catch (e)
{
  assert (e instanceof SyntaxError);
}

try
{
  eval ("v_0 = {a: Math, /[]/};");
  assert (false);
}
catch(e)
{
  assert (e instanceof SyntaxError);
}


code = 'eval("(function (){})")';
code = "eval ('" + code + "')";
eval (code);


var p1 = 0;

function f3() {
  var p1 = 5;
  (eval)("assert(p1 === 5)");
}
f3();

function f4() {
  var p1 = 6;
  ((eval))("assert(p1 === 6)");
}
f4();

function f5() {
  var p1 = 7;
  (((((eval)))("assert(p1 === 7)")));
}
f5();

function f6() {
  var p1 = 8;
  var e = eval;

  e("assert(p1 === 0)");
  (((((e)))("assert(p1 === 0)")));
}
f6();

y = 1;
function f7() {
  function x() { return y; }
  eval("assert(x()() === 5); function y() { return 5 } assert(x()() === 5)");
}
f7()

eval(" ");
eval("(function () {})")

try {
  
  eval("()=>0")
} catch (e) {
  assert(e instanceof SyntaxError)
}
