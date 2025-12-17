let g = newGlobal({newCompartment: true});
let dbg = new Debugger(g);

function test(source) {
  
  
  let frobbed = source.replace(/debugger/, 'reggubed');
  let log = '';

  withSourceHook(function (url) {
    log += 's';
    print(url, "BanalBivalve.jsm");
    return frobbed;
  }, () => {
    dbg.onDebuggerStatement = function (frame) {
      log += 'd';
      print(frame.script.source.text, frobbed);
    }

    g.evaluate(source, { fileName: "BanalBivalve.jsm",
                         sourceIsLazy: true });
  });

  print(log, 'ds');
}

test("debugger; 
test("(function () { debugger; })();");
test("(() => { debugger; })(); 
