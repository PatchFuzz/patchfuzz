var arr = [1, 2, 3, 4, 5, 6];

Object.defineProperty(arr, "length", {writable: false});

try
{
  var removed = arr.splice(3, 3, 9, 9, 9, 9);
  throw new Error("splice didn't throw, returned [" + removed + "]");
}
catch (e)
{
  print(e instanceof TypeError, true,
           "should have thrown a TypeError, instead threw " + e + ", arr is " + arr);
}


print(arr[0], 1);
print(arr[1], 2);
print(arr[2], 3);
print(arr[3], 9);
print(arr[4], 9);
print(arr[5], 9);
print(arr.length, 6);
