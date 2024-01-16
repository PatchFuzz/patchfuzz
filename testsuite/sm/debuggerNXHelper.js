function testDebuggerHooksNX(dbg, g, testHook) {
  function testDebuggerHook(hookName, trigger) {
    var hit = false;
    dbg[hookName] = () => {
      hit = true;
      dbg[hookName] = undefined;
      testHook(hookName);
    };
    trigger();
    assertEq(hit, true);
  }

  
  testDebuggerHook("onDebuggerStatement",
                   () => { g.eval("debugger;"); });

  testDebuggerHook("onExceptionUnwind",
                   () => {
                     try {
                       g.eval("throw 42;");
                     } catch (e) {
                       assertEq(e, 42);
                     }
                   });

  testDebuggerHook("onNewScript",
                   () => { g.eval("42"); });

  testDebuggerHook("onEnterFrame",
                   () => { g.eval("(() => {})()"); });

  testDebuggerHook("onNewGlobalObject",
                   () => { newGlobal(); });

  if ('Promise' in g) {
      testDebuggerHook("onNewPromise",
                       () => { new g.Promise(()=>{}); });

      testDebuggerHook("onPromiseSettled",
                       () => {
                         var p = new g.Promise(()=>{});
                         g.settlePromiseNow(p);
                       });
  }

  
  var onStepHit = false;
  var onPopHit = false;
  dbg.onEnterFrame = (frame) => {
    dbg.onEnterFrame = undefined;

    frame.onStep = () => {
      onStepHit = true;
      frame.onStep = undefined;
      testHook("onStep");
    };

    frame.onPop = () => {
      onPopHit = true;
      testHook("onPop");
    };
  };
  g.eval("42");
  assertEq(onStepHit, true);

  
  
  
  
  

  
  var breakpointHits = 0;
  dbg.onDebuggerStatement = (frame) => {
    dbg.onDebuggerStatement = undefined;
    var line0 = frame.script.getOffsetLocation(frame.offset).lineNumber;
    var offs = frame.script.getLineOffsets(line0 + 1);
    for (let i = 0; i < offs.length; i++) {
      frame.script.setBreakpoint(offs[i], {
        hit: () => {
          breakpointHits++;
          testHook("breakpoint");
        }
      });
    }
  };
  g.eval(`debugger;
         s = 'a'`);
  assertEq(breakpointHits >= 1, true);
}
