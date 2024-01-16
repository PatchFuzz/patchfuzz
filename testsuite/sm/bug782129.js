



var callStack = new Array();
function enterFunc (funcName) {
  funcName += "()";
  callStack.push(funcName);
}
function exitFunc (funcName) {
  var lastFunc = callStack.pop();
  funcName += "()";
  if (lastFunc != funcName)
    print();
}
try {
  test();
} catch(exc1) {}
function test() {
  enterFunc ('test');
  test();
}
for (var l = 0; l < 50000; l++)
  exitFunc ('test');
