;

function f(arr, v1, v2)
{
  
  arr.push(v1, v2);
}

var N = 100;

function test(out)
{
  
  
  
  var arrs = out.arrs = [];
  for (var i = 0; i < N; i++)
    arrs.push([]);

  
  var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  Object.defineProperty(a, "length", { writable: false, value: 6 });

  arrs.push(a);

  for (var i = 0, sz = arrs.length; i < sz; i++)
  {
    var arr = arrs[i];
    f(arr, 8675309, 3141592);
  }
}

var obj = {};

print(function() { test(obj); }, TypeError);

var arrs = obj.arrs;
print(arrs.length, N + 1);
for (var i = 0; i < N; i++)
{
  print(arrs[i].length, 2, "unexpected length for arrs[" + i + "]");
  print(arrs[i][0], 8675309, "bad element for arrs[" + i + "][0]");
  print(arrs[i][1], 3141592, "bad element for arrs[" + i + "][1]");
}

var a = arrs[N];
print(a.hasOwnProperty(6), false);
print(a[6], undefined);
print(a.hasOwnProperty(7), false);
print(a[7], undefined);
print(a.length, 6);
