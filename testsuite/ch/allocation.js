




for (i = 0; i < 1000; i++) {
  var a = new ArrayBuffer(10000000);
  for (j = 0; j < 20; j++)   {
     var b = new Object();
  }
}
WScript.Echo("pass");