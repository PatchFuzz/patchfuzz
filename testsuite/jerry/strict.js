













'use strict';

var temp;

try
{
  a = 1;

  assert (false);
} catch (e)
{
  assert (e instanceof ReferenceError);
}

try
{
  NaN = 1;

  assert (false);
} catch (e)
{
  assert (e instanceof TypeError);
}

function f()
{
  assert(this === undefined);
}

f();

Object.function_prop = function ()
{
  assert (this === Object);
}

Object.function_prop ();

try
{
  var temp = f.caller;

  assert (false);
} catch (e)
{
  assert (e instanceof TypeError);
}

try
{
  delete this.NaN;

  assert (false);
} catch (e)
{
  assert (e instanceof TypeError);
}

try
{
  eval ("'\\" + "101'");

  assert (false);
} catch (e)
{
  assert (e instanceof SyntaxError);
}

try
{
  var str1 = "'\\" + "0'";
  var str2 = "'\\x" + "00'";
  eval (str1);

  assert (eval (str1) === eval (str2));
} catch (e)
{
  assert (false);
}

try
{
  var str1 = "'\\" + "0" + "\\" + "0" + "\\" + "0'";
  var str2 = "'\\x" + "00" + "\\x" + "00" + "\\x" + "00'";
  eval (str1);

  assert (eval (str1) === eval (str2));
} catch (e)
{
  assert (false);
}

try
{
  var str1 = "'foo\\" + "0" + "bar'";
  var str2 = "'foo\\x" + "00" + "bar'";
  eval (str1);

  assert (eval (str1) === eval (str2));
} catch (e)
{
  assert (false);
}

(function (a) {
  (function (a) {
  });
});
