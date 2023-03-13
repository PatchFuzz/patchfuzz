













function f_arg (arguments)
{
  return arguments;
}
print(f_arg (1) === 1);

function f (a, b, c)
{
  return arguments;
}

args = f();
print(args[0] === undefined);

args = f (1, 2, 3, 4, 5);
print(args[0] === 1);
print(args[1] === 2);
print(args[2] === 3);
print(args[3] === 4);
print(args[4] === 5);
print(args[5] === undefined);

print(args.callee === f);
print(typeof args.caller === 'undefined');

function g (a, b, c)
{
  print(arguments[0] === 1);
  print(arguments[1] === undefined);
  print(arguments[2] === undefined);

  a = 'a';
  b = 'b';
  c = 'c';

  print(arguments[0] === 'a');
  print(arguments[1] === 'b');
  print(arguments[2] === 'c');

  arguments [0] = 1;
  arguments [1] = 2;
  arguments [2] = 3;

  print(a === 1);
  print(b === 2);
  print(c === 3);

  delete arguments [0];
  arguments[0] = 'new value';
  print(a === 1);

  a = 'a';
  b = 'b';
  c = 'c';

  print(arguments[0] === 'new value');
  print(arguments[1] === 'b');
  print(arguments[2] === 'c');
}

g (1);

fn_expr = function (a, b, c)
{
  'use strict';

  print(arguments[0] === 1);
  print(arguments[1] === undefined);
  print(arguments[2] === undefined);

  a = 'a';
  b = 'b';
  c = 'c';

  print(arguments[0] === 1);
  print(arguments[1] === undefined);
  print(arguments[2] === undefined);

  arguments [0] = 1;
  arguments [1] = 'p';
  arguments [2] = 'q';

  print(a === 'a');
  print(b === 'b');
  print(c === 'c');

  delete arguments [0];
  arguments[0] = 'new value';
  print(a === 'a');

  a = 'a';
  b = 'b';
  c = 'c';

  print(arguments[0] === 'new value');
  print(arguments[1] === 'p');
  print(arguments[2] === 'q');

  function check_type_error_for_property (obj, prop) {
    try {
      var v = obj[prop];
      print(false);
    }
    catch (e) {
      print(e instanceof TypeError);
    }
  }

  check_type_error_for_property (arguments, 'callee');
}

fn_expr (1);

(function () {
 var a = [arguments];
})();

function nested_args()
{
  var a;
  for (var i = 0; i < 1; i++)
  {
    if (i == 0)
    {
      a = arguments[i];
    }
  }
  print(a === 3);
}
nested_args(3);


function f1(a, b, c)
{
  'use strict';
  print(!Object.hasOwnProperty(arguments,'caller'));
}

f1(1, 2, 3);



function f2(a = arguments)
{
  print(arguments[1] === 2)
  var arguments = 1
  print(arguments === 1)
  print(a[1] === 2)
}
f2(undefined, 2)

function f3(a = arguments)
{
  print(arguments() === "X")
  function arguments() { return "X" }
  print(arguments() === "X")
  print(a[1] === "R")
}
f3(undefined, "R")

function f4(a = arguments)
{
  const arguments = 3.25
  print(arguments === 3.25)
  print(a[1] === -1.5)
}
f4(undefined, -1.5)



function f5(a = arguments)
{
  print(arguments[1] === 2)
  var arguments = 1
  print(arguments === 1)
  print(a[1] === 2)
  eval()
}
f5(undefined, 2)

function f6(a = arguments)
{
  print(arguments() === "X")
  function arguments() { return "X" }
  print(arguments() === "X")
  print(a[1] === "R")
  eval()
}
f6(undefined, "R")

function f7(a = arguments)
{
  const arguments = 3.25
  print(arguments === 3.25)
  print(a[1] === -1.5)
  eval()
}
f7(undefined, -1.5)



function f8(a = () => arguments)
{
  print(arguments[1] === 2)
  var arguments = 1
  print(arguments === 1)
  print(a()[1] === 2)
}
f8(undefined, 2)

function f9(a = () => arguments)
{
  print(arguments() === "X")
  function arguments() { return "X" }
  print(arguments() === "X")
  print(a()[1] === "R")
}
f9(undefined, "R")

function f10(a = () => arguments)
{
  let arguments = 3.25
  print(arguments === 3.25)
  print(a()[1] === -1.5)
}
f10(undefined, -1.5)



function f11(a = eval("() => arguments"))
{
  print(arguments[1] === 2)
  var arguments = 1
  print(arguments === 1)
  print(a()[1] === 2)
}
f11(undefined, 2)

function f12(a = eval("() => arguments"))
{
  print(arguments() === "X")
  function arguments() { return "X" }
  print(arguments() === "X")
  print(a()[1] === "R")
}
f12(undefined, "R")

function f13(a = eval("() => arguments"))
{
  const arguments = 3.25
  print(arguments === 3.25)
  print(a()[1] === -1.5)
}
f13(undefined, -1.5)



try {
  function f14(a = arguments)
  {
    print(a[1] === 6)
    arguments;
    let arguments = 1;
  }
  f14(undefined, 6)
  print(false)
} catch (e) {
  print(e instanceof ReferenceError)
}

try {
  eval("'use strict'; function f(a = arguments) { arguments = 5; eval() }");
  print(false)
} catch (e) {
  print(e instanceof SyntaxError)
}

function f15()
{
  print(arguments[0] === "A")
  var arguments = 1
  print(arguments === 1)
}
f15("A")

function f16()
{
  print(arguments() === "W")
  function arguments() { return "W" }
  print(arguments() === "W")
}
f16("A")

function f17(a = arguments = "Val")
{
  print(arguments === "Val")
}
f17();

function f18(s = (v) => arguments = v, g = () => arguments)
{
  const arguments = -3.25
  s("X")

  print(g() === "X")
  print(arguments === -3.25)
}
f18()

function f19(e = (v) => eval(v))
{
  var arguments = -12.5
  e("arguments[0] = 4.5")

  print(e("arguments[0]") === 4.5)
  print(e("arguments[1]") === "A")
  print(arguments === -12.5)
}
f19(undefined, "A");

function f20 (arguments, a = eval('arguments')) {
  print(a === 3.1);
  print(arguments === 3.1);
}
f20(3.1);

function f21 (arguments, a = arguments) {
  print(a === 3.1);
  print(arguments === 3.1);
}
f21(3.1);

function f22 (arguments, [a = arguments]) {
  print(a === 3.1);
  print(arguments === 3.1);
}
f22(3.1, []);

try {
  function f23(p = eval("var arguments"), arguments)
  {
  }
  f23()
  print(false)
} catch (e) {
  print(e instanceof SyntaxError)
}

try {
  function f24(p = eval("var arguments")) {
    let arguments;
  }
  f24()
  print(false)
} catch (e) {
  print(e instanceof SyntaxError)
}

try {
  function f25(p = eval("var arguments")) {
    function arguments() { }
  }
  f25()
  print(false)
} catch (e) {
  print(e instanceof SyntaxError)
}

function f26(arguments, eval = () => eval()) {
  print(arguments === undefined);
}
f26(undefined);
