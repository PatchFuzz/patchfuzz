function f(arr, v)
{
  arr.push(v);
}

function basic(out)
{
  
  var a = out.a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  Object.defineProperty(a, "length", { writable: false, value: 6 });

  f(a, 99);
}

var obj = {};
var a;

try
{
  basic(obj);
  throw new Error("didn't throw!");
}
catch (e)
{
  print(e instanceof TypeError, true, "expected TypeError, got " + e);

  a = obj.a;
  print(a.hasOwnProperty(6), false);
  print(a[6], undefined);
  print(a.length, 6);
}
