


var g = newGlobal({ newCompartment: true });

var log = '';
var saved;

new Debugger(g).onDebuggerStatement = function (frame) {

  
  
  this.onDebuggerStatement = undefined;

  
  frame.onPop = function () {
    log += 'p';
  }
}

g.parent = this;

g.eval(`
  debugger;
  gc();
`);

assertEq(log, 'p');
