













function a (n) {
  var array = new Int32Array(n)
  var array2 = new Int32Array(array)
  array2.set(new Uint8Array(array.buffer, 34))
}

a(10)
