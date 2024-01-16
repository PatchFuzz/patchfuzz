




function foo() {
  var a = new Int8Array(500);
  for(var i = 500; i < 1000; ++i) {
    a[i] = 0;
  }
}

foo();
foo();
WScript.Echo("PASSED");