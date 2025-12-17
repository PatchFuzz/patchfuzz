;

function f(arr)
{
  print(arr.unshift(3, 5, 7, 9), 8); 
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
  print(arrs[i].length, 8, "unexpected length for arrs[" + i + "]");
  print(arrs[i][0], 3, "bad element for arrs[" + i + "][0]");
  print(arrs[i][1], 5, "bad element for arrs[" + i + "][1]");
  print(arrs[i][2], 7, "bad element for arrs[" + i + "][2]");
  print(arrs[i][3], 9, "bad element for arrs[" + i + "][3]");
  print(arrs[i][4], 0, "bad element for arrs[" + i + "][4]");
  print(arrs[i][5], 1, "bad element for arrs[" + i + "][5]");
  print(arrs[i][6], 2, "bad element for arrs[" + i + "][6]");
  print(arrs[i][7], 3, "bad element for arrs[" + i + "][7]");
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
print(a.hasOwnProperty(6), false, "shouldn't have added any elements");
print(a[6], undefined);
print(a.hasOwnProperty(7), false, "shouldn't have added any elements");
print(a[7], undefined);
print(a.length, 4, "length shouldn't have been changed");
