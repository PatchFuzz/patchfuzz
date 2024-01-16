













var arrb = new ArrayBuffer(13);
var arr = new Uint8Array(arrb, 9);
for (var idx = 0; idx < arr.length; idx++) {
  arr[idx] = idx + 1;
}

assert(arr.slice(1).toString() == "2,3,4");
