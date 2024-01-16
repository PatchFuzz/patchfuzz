






var count = 0;
while (count++ < 5) {
  if (count == 3) {
    WScript.RequestAsyncBreak();
  }
}

function foo() {
  var x = 1;
  x = 2; 
}
foo();

WScript.Echo("pass");
