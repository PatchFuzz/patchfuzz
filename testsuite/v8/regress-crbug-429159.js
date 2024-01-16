



try {
  var src = "return " + Array(12000).join("src,") + "src";
  var fun = Function(src);
  assertEquals(src, fun());
} catch (e) {
  
  assertInstanceof(e, RangeError);
}
