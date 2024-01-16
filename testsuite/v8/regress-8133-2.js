



const arr = [1, , 3];

function mapper(x) {
  Array.prototype[1] = 2;
  return x + 1;
}





Array.prototype[Symbol.iterator] = undefined;
assertArrayEquals([2, 3, 4], Uint16Array.from(arr, mapper));
