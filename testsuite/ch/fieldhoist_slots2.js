




function test0(){
  var workItem = { increment: 1, isDone: false };
  var func0 = function() {
    workItem = { increment: 2, isDone: true }
  }
  while (!workItem.isDone) {
    for (var i = 0; i < 3 && !workItem.isDone; i += workItem.increment) {
      func0(i);
    }
  }
  WScript.Echo("i = " + i);
};


test0();


test0();
