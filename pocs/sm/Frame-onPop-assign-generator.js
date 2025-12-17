;

const g = newGlobal({ newCompartment: true });
const dbg = new Debugger(g);

let steps = new Set();
dbg.onDebuggerStatement = function(frame) {
  
  steps.add("debugger 1");
  print(frame.onStack, true);
  frame.onPop = function() {
    steps.add("onpop 1");
  };

  dbg.onDebuggerStatement = function() {
    
    steps.add("debugger 2");
    print(frame.onStack, false);

    
    frame.onPop = undefined;

      
    frame.onPop = function() {
      steps.add("onpop 2");
    };

    dbg.onDebuggerStatement = function() {
      steps.add("debugger 3");
      print(frame.onStack, false);

      
      frame.onPop = undefined;

        
      frame.onPop = function() {
        steps.add("onpop 3");
      };
    };
  };
};

g.eval(
  `
    function* myGen() {
      debugger;
      yield;
    }

    const g = myGen();
    g.next();

    debugger;
    g.next();

    debugger;
  `
);

print(Array.from(steps), [
  "debugger 1",
  "onpop 1",
  "debugger 2",
  "onpop 2",
  "debugger 3",
]);
