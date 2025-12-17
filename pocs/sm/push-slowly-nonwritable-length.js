;

function f(arr, v1, v2)
{
  
  arr.push(v1, v2);
}

function basic()
{
  
  var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  Object.defineProperty(a, "length", { writable: false, value: 6 });

  print(() => f(a, 8675309, 3141592), TypeError);

  print(a.hasOwnProperty(6), false);
  print(a[6], undefined);
  print(a.hasOwnProperty(7), false);
  print(a[7], undefined);
  print(a.length, 6);
}

basic();
