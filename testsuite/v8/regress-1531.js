




























function test(x) {
  arguments[10] = 0;
  var arr = [];
  for (var p in arguments) arr.push(p);
  return arr;
}
assertEquals(["0", "10"], test(0));



function test1(x, y, z) {
  
  arguments.__defineGetter__("5", function () { return 0; });
  
  delete arguments[5];
  
  return arguments[2];
}

assertEquals(void 0, test1(0));
