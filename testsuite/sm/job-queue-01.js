









var g = newGlobal({ newCompartment: true });
g.parent = this;
var dbg = new Debugger;
var gDO = dbg.addDebuggee(g);
var log = '';




function exercise(name) {
  log += `${name}-handler`;
  Promise.resolve(42).then(v => {
    assertEq(v, 42);
    log += `${name}-react`;
  });
  log += `(`;
  drainJobQueue();
  log += `)`;

  
  
  Promise.resolve(42).then(v => {
    assertEq(v, 42);
    log += `(${name}-tail)`;
  });
}

dbg.onDebuggerStatement = function (frame) {
  exercise('debugger');

  frame.onStep = function () {
    this.onStep = undefined;
    exercise('step');
  };

  dbg.onEnterFrame = function (frame) {
    dbg.onEnterFrame = undefined;
    frame.onPop = function(completion) {
      assertEq(completion.return, 'recompense');
      exercise('pop');
    }

    exercise('enter');
  }

  dbg.onExceptionUnwind = function(frame, value) {
    dbg.onExceptionUnwind = undefined;
    assertEq(value, 'recidivism');
    exercise('exception');
    return { return: 'recompense' };
  };

  
  const script = gDO.getOwnPropertyDescriptor('breakpoint_here').value.script;
  const handler = {
    hit(frame) {
      script.clearAllBreakpoints();
      exercise('bp');
    }
  };
  script.setBreakpoint(0, handler);

  dbg.uncaughtExceptionHook = function (ex) {
    assertEq(ex, 'turncoat');
    exercise('uncaught');
  };

  
  
  throw 'turncoat';
};

g.eval(`
  function breakpoint_here() {
    throw 'recidivism';
  }

  parent.log += 'eval(';

  
  
  
  
  
  
  

  Promise.resolve(84).then(function(v) {
    assertEq(v, 84);
    parent.log += 'eval-react';
  });
  debugger;
  parent.log += '...';
  breakpoint_here();
  parent.log += ')';
`);

log += 'main-drain('
drainJobQueue();
log += ')';

assertEq(log, `eval(\
debugger-handler(debugger-react)\
uncaught-handler((debugger-tail)uncaught-react)(uncaught-tail)\
step-handler(step-react)(step-tail)\
...\
enter-handler(enter-react)(enter-tail)\
bp-handler(bp-react)(bp-tail)\
exception-handler(exception-react)(exception-tail)\
pop-handler(pop-react)(pop-tail)\
)\
main-drain(eval-react)`);
