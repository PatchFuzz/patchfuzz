;

function f(arr)
{
  print(arr.splice(1, 2, 9, 8, 7, 6).length, 2); 
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
  print(arrs[i].length, 6, "unexpected length for arrs[" + i + "]");
  print(arrs[i][0], 0,  "bad element for arrs[" + i + "][0]");
  print(arrs[i][1], 9, "bad element for arrs[" + i + "][1]");
  print(arrs[i][2], 8, "bad element for arrs[" + i + "][2]");
  print(arrs[i][3], 7, "bad element for arrs[" + i + "][3]");
  print(arrs[i][4], 6, "bad element for arrs[" + i + "][4]");
  print(arrs[i][5], 3, "bad element for arrs[" + i + "][5]");
}

var a = arrs[N];
print(a[0], 0, "bad element for a[0]");
print(a[1], 1, "bad element for a[1]");
print(a[2], 2, "bad element for a[2]");
print(a[3], 3, "bad element for a[3]");
print(a.hasOwnProperty(4), false, "shouldn't have added any elements");
print(a[4], undefined);
print(a.hasOwnProperty(5), false, "shouldn't have added any elements");
print(a[5], undefined);
print(a.length, 4, "length shouldn't have been changed");
