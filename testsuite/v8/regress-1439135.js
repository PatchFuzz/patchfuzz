



























function Test() {
  var left  = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
  for (var i = 0; i < 100000; i++) {
    var cons = left + right;
    var substring = cons.substring(20, 80);
    var index = substring.indexOf('Y');
    assertEquals(34, index);
  }
}

Test();
