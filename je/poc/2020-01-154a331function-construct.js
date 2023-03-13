













var f = new Function ('');
print(f () === undefined);

var f = new Function ('"use strict"; f = undefined;');
print(f () === undefined && f === undefined);

var f = new Function ('"use strict"; q = undefined;');
try
{
  f ();
  print(false);
}
catch (e)
{
  print(e instanceof ReferenceError);
}

var singleArgFunction = new Function ('arg', 'return arg');

print(singleArgFunction (5) === 5);

for (i = 1; i < 10; i ++)
{
  var f = new Function ('a', 'b', 'var q = a; b++; function f (k) {return q + k + b++;}; return f;');

  var fns = new Array ();

  for (var n = 0; n < 10; n++)
  {
    var r = f (1, 7);
    fns[n] = r;

    var check_value = 10;

    for (var m = 0; m < 100; m++)
    {
      var value = r (1);
      print(check_value++ === value);
    }
  }

  var check_value = 109;
  for (var n = 0; n < 11; n++)
  {
    for (var m = 0; m < 10; m++)
    {
      var value = fns [m] (m * n);
      print(value == check_value + m * n);
    }

    check_value++;
  }
}

var f = new Function ("a,b", "c", "return a + b + c;");
print(f (1,2,3) === 6);

f = new Function ("a,b", "c,d", "return a + b + c + d;");
print(f (1,2,3,4) === 10);

f = new Function ("a" , "b", "c,d", "return a + b + c + d;");
print(f (1,2,3,4) === 10);

var f = new Function (" a\t ,  b", "\u0020c", "return a + b + c;");
print(f (1,2,3) === 6);

f = new Function ("a, \n b  \u0020", "c \t, d\n", "return a + b + c + d;");
print(f (1,2,3,4) === 10);

f = new Function (" a\t" , "\nb ", " \u0020c , d ", "return a + b + c + d;");
print(f (1,2,3,4) === 10);

try
{
  new Function ({
    toString : function () {
      throw new TypeError();
    },
    valueOf : function () {
      throw new TypeError();
    }
  });

  print(false);
}
catch (e)
{
  print(e instanceof TypeError);
}

var p = { toString : function() { throw 1; } };
var body = { toString : function() { throw "body"; } };

try
{
  new Function (p, body);
  
  print(false);
}
catch (e)
{
  print(e === 1);
}


try
{
  new Function ('var var;');
  print(false);
}
catch (e)
{
  print(e instanceof SyntaxError);
}

try
{
  new Function ('a;b', 'return;');
  print(false);
}
catch (e)
{
  print(e instanceof SyntaxError);
}
