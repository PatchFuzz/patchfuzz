



const arr = [1, , 3];

function mapper(x) {
  Array.prototype[1] = 2;
  return x + 1;
}





assertArrayEquals([2, 0, 4], Uint16Array.from(arr, mapper));
