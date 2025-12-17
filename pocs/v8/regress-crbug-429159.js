try {
  var src = "return " + Array(12000).join("src,") + "src";
  var fun = Function(src);
  print(src, fun());
} catch (e) {
  
  print(e, RangeError);
}
