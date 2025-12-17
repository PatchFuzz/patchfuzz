;

function f(arr)
{
  arr.pop();
}

var N = 100;

function test()
{
  
  
  
  var arrs = [];
  for (var i = 0; i < N; i++)
    arrs.push([0, 1, 2, 3]);

  
  var a = [0, 1, 2];
  a.length = 4;

  arrs.push(a);

  for (var i = 0, sz = arrs.length; i < sz; i++)
    f(arrs[i]);

  return arrs;
}

var arrs = test();
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
print(a.length, 3, "unexpected length for arrs[" + i + "]");
print(a[0], 0, "bad element for arrs[" + i + "][0]");
print(a[1], 1, "bad element for arrs[" + i + "][1]");
print(a[2], 2, "bad element for arrs[" + i + "][2]");
print(3 in a, false, "shouldn't be a third element");
print(a[3], undefined);
