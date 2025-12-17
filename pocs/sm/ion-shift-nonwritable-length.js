function f(arr)
{
  print(arr.shift(), 0);
}

function test(out)
{
  
  
  
  var arrs = out.arrs = [];
  for (var i = 0; i < 100; i++)
    arrs.push([0, 1, 2, 3]);

  
  var a = [0, 1, 2, 3, 4, 5, 6, 7];
  Object.defineProperty(a, "length", { writable: false, value: 4 });

  arrs.push(a);

  for (var i = 0, sz = arrs.length; i < sz; i++)
  {
    var arr = arrs[i];
    f(arr);
  }
}

var obj = {};
var a, arrs;

try
{
  test(obj);
  throw new Error("didn't throw!");
}
catch (e)
{
  print(e instanceof TypeError, true, "expected TypeError, got " + e);

  arrs = obj.arrs;
  print(arrs.length, 101);
  for (var i = 0; i < 100; i++)
  {
    print(arrs[i].length, 3, "unexpected length for arrs[" + i + "]");
    print(arrs[i][0], 1, "bad element for arrs[" + i + "][0]");
    print(arrs[i][1], 2, "bad element for arrs[" + i + "][1]");
    print(arrs[i][2], 3, "bad element for arrs[" + i + "][2]");
    print(3 in arrs[i], false, "shouldn't be a third element");
    print(arrs[i][3], undefined);
  }

  a = arrs[100];
  print(a[0], 1, "bad element for a[" + i + "]");
  print(a[1], 2, "bad element for a[" + i + "]");
  print(a[2], 3, "bad element for a[" + i + "]");
  print(a.hasOwnProperty(3), false, "should have been deleted before throw");
  print(a[3], undefined);
  print(a.length, 4, "length shouldn't have been changed");
}
