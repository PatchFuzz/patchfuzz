;

const g = newGlobal({ newCompartment: true });
const dbg = new Debugger(g);

let steps = new Set();
dbg.onDebuggerStatement = function(frame) {
  
  steps.add("debugger 1");
  print(frame.onStack, true);
  frame.onStep = function() {
    steps.add("onstep 1");
  };

  dbg.onDebuggerStatement = function() {
    
    steps.add("debugger 2");
    print(frame.onStack, false);

    
    frame.onStep = undefined;

      
    frame.onStep = function() {
      steps.add("onstep 2");
    };

    dbg.onDebuggerStatement = function() {
      steps.add("debugger 3");
      print(frame.onStack, false);

      
      frame.onStep = undefined;

        
      frame.onStep = function() {
        steps.add("onstep 3");
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
  "onstep 1",
  "debugger 2",
  "onstep 2",
  "debugger 3",
]);
