async function foo() {
  
  await undefined;

  
  saveStack();

  
  var g = newGlobal({principal: {}});
  captureFirstSubsumedFrame(g);
}



foo();



for (var i = 0; i < 20; i++) {}


drainJobQueue();
