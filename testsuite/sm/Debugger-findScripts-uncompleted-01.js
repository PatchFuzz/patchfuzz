




let g = newGlobal({newCompartment: true});
let dbg = new Debugger(g);

let message = "";
try {
  g.eval(`
(function nonLazyOuter() {
  (function nonLazyInner() {
    function lazy1() {
      function lazy2() {
      }
    }
  })();
})();

(function uncompletedNonLazy() {
  function lazyInUncompleted1() {
    function lazyInUncompleted2() {
    }
  }
  
  
  
  
  switch (1) {
    ${"case 1:".repeat(2**16+1)}
  }
})();
`);
} catch (e) {
  message = e.message;
}

assertEq(message.includes("too many switch cases"), true,
         "Error for switch-case should be thrown," +
         "in order to test the case that uncompleted script is created");

for (var script of dbg.findScripts()) {
  
  
  if (script.displayName) {
    assertEq(script.displayName != "uncompletedNonLazy", true,
             "Uncompiled script shouldn't be found");
    assertEq(script.displayName != "lazyInUncompleted1", true,
             "Scripts inside uncompiled script shouldn't be found");
    assertEq(script.displayName != "lazyInUncompleted2", true,
             "Scripts inside uncompiled script shouldn't be found");
  }
}
