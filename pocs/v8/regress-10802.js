const arr = new Uint8Array([1, 2, 3]);

function mapper(x) {
  arr[1] = 182;
  return x + 1;
}

print([2, 3, 4], Uint16Array.from(arr, mapper));
