;

function f(arr)
{
  print(arr.pop(), undefined); 
}

var N = 100;

function basic(out)
{
  
  
  
  var arrs = out.arrs = [];
  for (var i = 0; i < N; i++)
  {
    var arr = [0, 1, 2, 3, 4];
    arr.length = 6;
    arrs.push(arr);
  }

  var a = [0, 1, 2, 3, 4];
  Object.defineProperty(a, "length", { writable: false, value: 6 });

  arrs.push(a);

  for (var i = 0, sz = arrs.length; i < sz; i++)
    f(arrs[i]);
}

var obj = {};
var arrs, a;

print(function() { basic(obj); }, TypeError);

var arrs = obj.arrs;
print(arrs.length, N + 1);
for (var i = 0; i < N; i++)
{
  print(arrs[i].length, 5, "unexpected length for arrs[" + i + "]");
  print(arrs[i].hasOwnProperty(5), false,
           "element not deleted for arrs[" + i + "]");
}

var a = arrs[N];
print(a.hasOwnProperty(5), false);
print(a[5], undefined);
print(a.length, 6);
