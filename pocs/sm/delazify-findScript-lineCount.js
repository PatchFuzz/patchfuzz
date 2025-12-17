function testDelazify(i) {
  var g = newGlobal({ newCompartment: true });
  var dbg = new Debugger(g);

  dbg.onDebuggerStatement = (frame) => {
    var allScripts = dbg.findScripts();
    var j = 0;
    for (let script of allScripts) {
      if (i == -1 || i == j) {
        
        try {
          script.lineCount;
        } catch (e) {
        }
      }
      j++;
    }
  };

  var cache = cacheEntry(`
function f(
  a = (
    b = (
      c = function g() {
      },
    ) => {
    },
    d = (
      e = (
        f = (
        ) => {
        },
      ) => {
      },
    ) => {
    },
  ) => {
  },
) {
}
debugger;
`);

  evaluate(cache, { global: g, saveBytecodeWithDelazifications: true });
  evaluate(cache, { global: g, loadBytecode: true });
}


testDelazify(-1);


for (var i = 0; i < 30; i++) {
  testDelazify(i);
}
