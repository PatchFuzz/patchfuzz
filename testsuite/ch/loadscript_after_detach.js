




var count = 0;
function foo() {
  count++;
  if (count == 3) {
    WScript.LoadScript("", "samethread"); 
  }
}
foo();
WScript.Attach(foo);
WScript.Detach(foo);
WScript.Attach(foo);
WScript.Echo("pass");
