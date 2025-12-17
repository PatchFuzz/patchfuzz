try {
  var v65 = new ArrayBuffer(2147483647);
} catch(e) {
  print(e instanceof RangeError);
}
