function testMaxLength() {
  let arr = [];
  const MAX_ARRAY_INDEX = 2 ** 32 - 2;
  arr[MAX_ARRAY_INDEX] = 1;
  arr[MAX_ARRAY_INDEX + 1] = 1;
  print(arr.length, MAX_ARRAY_INDEX + 1);
  arr.length = 0;
  print(arr[MAX_ARRAY_INDEX], undefined);
  print(arr[MAX_ARRAY_INDEX + 1], 1);
  print(Object.keys(arr).length, 1);
}
testMaxLength();
