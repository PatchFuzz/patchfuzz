function f(array, x) {
  array.x = x;
  array[0] = undefined;
  return array;
}

f([1.1], 1);
f([2.2], 1);
%HeapObjectVerify(f([3.3], undefined));
