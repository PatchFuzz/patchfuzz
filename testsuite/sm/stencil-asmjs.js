

let source = `
  var m = function() {
    "use asm"
    function g(){}
    return g;
  }

  function check() {
    var objM = new m;
    var g = m();
    
    assertEq(Object.getOwnPropertyNames(new g).length, 0);
  }

  check()
`;



const options = {
    fileName: "tests/asm.js/testBug999790.js",
    lineNumber: 1,
    eagerDelazificationStrategy: "CheckConcurrentWithOnDemand",
    newContext: true,
};
evaluate(source, options);
