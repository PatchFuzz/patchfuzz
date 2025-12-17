let buffer = new ArrayBuffer(0);

let result = null;
try {
  result = buffer.transfer(2 ** 32);
} catch {
  
}


if (result) {
  print(result.byteLength, 2 ** 32);
}
