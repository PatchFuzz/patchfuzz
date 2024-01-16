
var push = Array.prototype.push;

function f(arr)
{
  
  push.call(arr, 99);
}

function basic(out)
{
  
  
  
  var arrs = out.arrs = [];
  for (var i = 0; i < 100; i++)
    arrs.push([]);

  
  var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  Object.defineProperty(a, "length", { writable: false, value: 6 });

  arrs.push(a);

  for (var i = 0, sz = arrs.length; i < sz; i++)
  {
    var arr = arrs[i];
    f(arr);
  }
}

var obj = {};
var arrs, a;

try
{
  basic(obj);
  throw new Error("didn't throw!");
}
catch (e)
{
  assertEq(e instanceof TypeError, true, "expected TypeError, got " + e);

  arrs = obj.arrs;
  assertEq(arrs.length, 101);
  for (var i = 0; i < 100; i++)
  {
    assertEq(arrs[i].length, 1, "unexpected length for arrs[" + i + "]");
    assertEq(arrs[i][0], 99, "bad element for arrs[" + i + "]");
  }

  a = arrs[100];
  assertEq(a.hasOwnProperty(6), false);
  assertEq(a[6], undefined);
  assertEq(a.length, 6);
}
