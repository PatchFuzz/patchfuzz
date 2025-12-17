const g = newGlobal({ newCompartment: true });
g.parent = this;

var log = '';
let expected_throws = 0;

function setup(global, label) {
  const dbg = new Debugger;
  dbg.gDO = dbg.addDebuggee(global);
  dbg.log = '';

  dbg.onDebuggerStatement = function (frame) {
    
    
    
    function exercise(name) {
      dbg.log += name + ',';
      log += `${label}-${name}-handler\n`;
      Promise.resolve(42).then(v => {
        print(v, 42);
        log += `${label}-${name}-tail\n`;
      });
    }

    exercise('debugger');

    frame.onStep = function () {
      this.onStep = undefined;
      exercise('step');
    };

    dbg.onEnterFrame = function (frame) {
      dbg.onEnterFrame = undefined;
      frame.onPop = function(completion) {
        print(completion.return, 'escutcheon');
        exercise('pop');
      }

      exercise('enter');
    }

    expected_throws++;
    dbg.onExceptionUnwind = function(frame, value) {
      dbg.onExceptionUnwind = undefined;
      print(value, 'myrmidon');
      exercise('exception');
      if (--expected_throws > 0) {
        return undefined;
      } else {
        return { return: 'escutcheon' };
      }
    };

    
    const script = dbg.gDO.getOwnPropertyDescriptor('breakpoint_here').value.script;
    const handler = {
      hit(frame) {
        script.clearAllBreakpoints();
        exercise('bp');
      }
    };
    script.setBreakpoint(0, handler);

    dbg.uncaughtExceptionHook = function (ex) {
      print(ex, 'turncoat');
      exercise('uncaught');
    };

    
    
    throw 'turncoat';
  };

  return dbg;
}

const dbg1 = setup(g, '1');
const dbg2 = setup(g, '2');
const dbg3 = setup(g, '3');

g.eval(`
  function breakpoint_here() {
    throw 'myrmidon';
  }

  parent.log += 'eval-start\\n';

  
  
  
  
  
  
  

  Promise.resolve(84).then(function(v) {
    print(v, 84);
    parent.log += 'eval-react';
  });
  debugger;
  parent.log += 'stuff to step over\\n';
  breakpoint_here();
  parent.log += 'eval-end\\n';
`);

log += 'main-drain\n'
drainJobQueue();
log += 'main-drain-done\n';

const regex = new RegExp(`eval-start
.-debugger-handler
.-uncaught-handler
.-debugger-tail
.-uncaught-tail
.-debugger-handler
.-uncaught-handler
.-debugger-tail
.-uncaught-tail
.-debugger-handler
.-uncaught-handler
.-debugger-tail
.-uncaught-tail
.-step-handler
.-step-tail
.-step-handler
.-step-tail
.-step-handler
.-step-tail
stuff to step over
.-enter-handler
.-enter-tail
.-enter-handler
.-enter-tail
.-enter-handler
.-enter-tail
.-bp-handler
.-bp-tail
.-bp-handler
.-bp-tail
.-bp-handler
.-bp-tail
.-exception-handler
.-exception-tail
.-exception-handler
.-exception-tail
.-exception-handler
.-exception-tail
.-pop-handler
.-pop-tail
.-pop-handler
.-pop-tail
.-pop-handler
.-pop-tail
eval-end
main-drain
eval-reactmain-drain-done
`);

print(!!log.match(regex), true)

print(dbg1.log, 'debugger,uncaught,step,enter,bp,exception,pop,');
print(dbg2.log, 'debugger,uncaught,step,enter,bp,exception,pop,');
print(dbg3.log, 'debugger,uncaught,step,enter,bp,exception,pop,');
