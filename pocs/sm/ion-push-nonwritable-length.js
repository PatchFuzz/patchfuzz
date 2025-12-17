function f(arr)
{
  print(arr.push(4), 5); 
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
    print(arrs[i].length, 5, "unexpected length for arrs[" + i + "]");
    print(arrs[i][0], 0, "bad element for arrs[" + i + "][0]");
    print(arrs[i][1], 1, "bad element for arrs[" + i + "][1]");
    print(arrs[i][2], 2, "bad element for arrs[" + i + "][2]");
    print(arrs[i][3], 3, "bad element for arrs[" + i + "][3]");
    print(arrs[i][4], 4, "bad element for arrs[" + i + "][4]");
  }

  a = arrs[100];
  print(a[0], 0, "bad element for a[" + i + "]");
  print(a[1], 1, "bad element for a[" + i + "]");
  print(a[2], 2, "bad element for a[" + i + "]");
  print(a[3], 3, "bad element for a[" + i + "]");
  print(a.hasOwnProperty(4), false, "element addition should have thrown");
  print(a[4], undefined);
  print(a.length, 4, "length shouldn't have been changed");
}
