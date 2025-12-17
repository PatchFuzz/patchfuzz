;

function f(arr)
{
  arr.pop();
}

var N = 100;

function test(out)
{
  
  
  
  var arrs = out.arrs = [];
  for (var i = 0; i < N; i++)
    arrs.push([0, 1, 2, 3]);

  
  var a = [0, 1, 2, 3, 4, 5, 6, 7];
  Object.defineProperty(a, "length", { writable: false, value: 4 });

  arrs.push(a);

  for (var i = 0, sz = arrs.length; i < sz; i++)
    f(arrs[i]);
}

var obj = {};

print(function() { test(obj); }, TypeError);

var arrs = obj.arrs;
print(arrs.length, N + 1);
for (var i = 0; i < N; i++)
{
  print(arrs[i].length, 3, "unexpected length for arrs[" + i + "]");
  print(arrs[i][0], 0, "bad element for arrs[" + i + "][0]");
  print(arrs[i][1], 1, "bad element for arrs[" + i + "][1]");
  print(arrs[i][2], 2, "bad element for arrs[" + i + "][2]");
  print(3 in arrs[i], false, "shouldn't be a third element");
  print(arrs[i][3], undefined);
}

var a = arrs[N];
print(a.hasOwnProperty(3), false, "should have been deleted before throw");
print(a[3], undefined);
print(a.length, 4, "length shouldn't have been changed");
