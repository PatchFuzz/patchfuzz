

let source = `
  function foo() {
    return "foo";
  }

  
  waitForStencilCache(foo);
  assertEq(isInStencilCache(foo), false);
`;

const options = {
    fileName: "inner-00.js",
    lineNumber: 1,
    eagerDelazificationStrategy: "OnDemandOnly",
    newContext: true,
};
evaluate(source, options);
