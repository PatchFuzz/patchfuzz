





























function boom() {
  var args = [];
  for (var i = 0; i < 110000; i++) {
    args.push(i);
  }
  return Array.apply(Array, args);
}

var array = boom();

assertEquals(110000, array.length);
assertEquals(100999, array[100999]);
