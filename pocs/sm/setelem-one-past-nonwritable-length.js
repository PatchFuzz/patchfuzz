function f(arr, i, v)
{
  arr[i] = v;
}

function test()
{
  
  var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  Object.defineProperty(a, "length", { writable: false, value: 6 });

  for (var i = 0; i < 100; i++)
    f(a, a.length, i);

  print(a.hasOwnProperty(6), false);
  print(a[6], undefined);
  print(a.length, 6);
}

test();
