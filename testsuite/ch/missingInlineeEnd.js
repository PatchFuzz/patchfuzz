




function bar() {
  foo();
}
function foo() {
  for (v8; 10; 0) {
  }
}

try{
  bar()
}catch(ex){
}

try{
  bar()
}catch(ex){
}

WScript.Echo("Passed");