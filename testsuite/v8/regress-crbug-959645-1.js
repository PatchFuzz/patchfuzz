





function f(array, x) {
  array.x = x;
  array[0] = 1.1;
  return array;
}

f([1], 1);
f([2], 1);
%HeapObjectVerify(f([3], undefined));
