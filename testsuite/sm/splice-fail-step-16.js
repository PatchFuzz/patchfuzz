

var arr = [1, 2, 3, 4, 5, 6];

Object.defineProperty(arr, "length", {writable: false});

try
{
  var removed = arr.splice(3, 3, 9, 9, 9, 9);
  throw new Error("splice didn't throw, returned [" + removed + "]");
}
catch (e)
{
  assertEq(e instanceof TypeError, true,
           "should have thrown a TypeError, instead threw " + e + ", arr is " + arr);
}


assertEq(arr[0], 1);
assertEq(arr[1], 2);
assertEq(arr[2], 3);
assertEq(arr[3], 9);
assertEq(arr[4], 9);
assertEq(arr[5], 9);
assertEq(arr.length, 6);
